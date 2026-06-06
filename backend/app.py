from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import uuid

db = SQLAlchemy()

def generate_uuid():
    return str(uuid.uuid4())

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.String(36), primary_key=True, default=generate_uuid)
    username = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)
    role = db.Column(db.String(20), nullable=False)
    affectation = db.Column(db.String(100), nullable=False)
    nomComplet = db.Column(db.String(100), nullable=False)

    def to_dict(self):
        return {
            "username": self.username,
            "role": self.role,
            "affectation": self.affectation,
            "nomComplet": self.nomComplet
        }

class Naissance(db.Model):
    __tablename__ = 'naissances'
    id = db.Column(db.String(36), primary_key=True, default=generate_uuid)
    date = db.Column(db.String(20), nullable=False)
    wilaya = db.Column(db.String(100), nullable=False)
    nombre = db.Column(db.Integer, nullable=False, default=0)
    sexe = db.Column(db.String(1), nullable=False, default='M')
    age_mere = db.Column(db.Integer, nullable=True)
    agent = db.Column(db.String(50), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "date": self.date,
            "wilaya": self.wilaya,
            "nombre": self.nombre,
            "sexe": self.sexe,
            "age_mere": self.age_mere,
            "agent": self.agent
        }

class Deces(db.Model):
    __tablename__ = 'deces'
    id = db.Column(db.String(36), primary_key=True, default=generate_uuid)
    date = db.Column(db.String(20), nullable=False)
    wilaya = db.Column(db.String(100), nullable=False)
    nombre = db.Column(db.Integer, nullable=False, default=0)
    sexe = db.Column(db.String(1), nullable=False, default='M')
    age = db.Column(db.Integer, nullable=True)
    cause = db.Column(db.String(200), nullable=True)
    agent = db.Column(db.String(50), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "date": self.date,
            "wilaya": self.wilaya,
            "nombre": self.nombre,
            "sexe": self.sexe,
            "age": self.age,
            "cause": self.cause,
            "agent": self.agent
        }

class Migration(db.Model):
    __tablename__ = 'migrations'
    id = db.Column(db.String(36), primary_key=True, default=generate_uuid)
    date = db.Column(db.String(20), nullable=False)
    type = db.Column(db.String(20), nullable=False)
    pointEntree = db.Column(db.String(100), nullable=False)
    nombre = db.Column(db.Integer, nullable=False, default=0)
    nationalite = db.Column(db.String(100), nullable=False)
    dureeSejour = db.Column(db.String(50), nullable=False)
    agent = db.Column(db.String(50), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "date": self.date,
            "type": self.type,
            "pointEntree": self.pointEntree,
            "nombre": self.nombre,
            "nationalite": self.nationalite,
            "dureeSejour": self.dureeSejour,
            "agent": self.agent
        }
app = Flask(__name__)
CORS(app) # Allow cross-origin requests

# Configuration de la base de données MySQL
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('SQLALCHEMY_DATABASE_URI')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

def init_db():
    with app.app_context():
        db.create_all()
        if User.query.count() == 0:
            default_users = [
                User(username="admin_ansade", password="admin123", role="ansade", affectation="Tous (National)", nomComplet="Administrateur ANSADE"),
                User(username="medecin_nkc", password="sante123", role="sante", affectation="Nouakchott Ouest", nomComplet="Médecin · Nouakchott Ouest"),
                User(username="medecin_ndb", password="sante456", role="sante", affectation="Dakhlet Nouadhibou", nomComplet="Médecin · Nouadhibou"),
                User(username="agent_aero_nkc", password="aero123", role="migration", affectation="Aéroport NKC", nomComplet="Agent · Aéroport Nouakchott"),
                User(username="agent_aero_ndb", password="aero456", role="migration", affectation="Aéroport NDB", nomComplet="Agent · Aéroport Nouadhibou"),
                User(username="agent_port_ndb", password="port123", role="migration", affectation="Port Nouadhibou", nomComplet="Agent · Port de Nouadhibou")
            ]
            db.session.add_all(default_users)
            db.session.commit()

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/login', methods=['GET'])
def login_page():
    return render_template('login.html')

@app.route('/admin', methods=['GET'])
def admin_page():
    return render_template('admin.html')

@app.route('/statistiques', methods=['GET'])
def statistiques_page():
    return render_template('statistiques.html')





# Route d'authentification
@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    user = User.query.filter_by(username=username, password=password).first()
    if user:
        return jsonify(user.to_dict()), 200
    else:
        return jsonify({"message": "Identifiants invalides"}), 401

# Route pour lister les utilisateurs (ANSADE uniquement)
@app.route('/api/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([u.to_dict() for u in users]), 200

# Route pour ajouter un utilisateur
@app.route('/api/users', methods=['POST'])
def add_user():
    data = request.json
    username = data.get('username', '').strip()
    if not username:
        return jsonify({"message": "Identifiant requis"}), 400
    if User.query.filter_by(username=username).first():
        return jsonify({"message": "Cet identifiant existe déjà"}), 409
    new_user = User(
        username=username,
        password=data.get('password', 'password123'),
        role=data.get('role', 'sante'),
        affectation=data.get('affectation', 'Nouakchott Ouest'),
        nomComplet=data.get('nomComplet', username)
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"success": True, "user": new_user.to_dict()}), 201

# Route pour supprimer un utilisateur
@app.route('/api/users/<username>', methods=['DELETE'])
def delete_user(username):
    if username == 'admin_ansade':
        return jsonify({"message": "Impossible de supprimer l'administrateur principal"}), 403
    user = User.query.filter_by(username=username).first()
    if not user:
        return jsonify({"message": "Utilisateur introuvable"}), 404
    db.session.delete(user)
    db.session.commit()
    return jsonify({"success": True}), 200

# Route pour modifier un utilisateur
@app.route('/api/users/<username>', methods=['PUT'])
def edit_user(username):
    user = User.query.filter_by(username=username).first()
    if not user:
        return jsonify({"message": "Utilisateur introuvable"}), 404
    
    data = request.json
    
    # Check if attempting to change admin_ansade's role or affectation
    if username == 'admin_ansade':
        if data.get('role') and data.get('role') != 'ansade':
            return jsonify({"message": "Impossible de modifier le rôle de l'administrateur principal"}), 403
            
    if data.get('password'):
        user.password = data.get('password')
    if data.get('role'):
        user.role = data.get('role')
    if data.get('affectation'):
        user.affectation = data.get('affectation')
    if data.get('nomComplet') is not None:
        user.nomComplet = data.get('nomComplet')
        
    db.session.commit()
    return jsonify({"success": True, "user": user.to_dict()}), 200

# Routes pour les naissances
@app.route('/api/naissances', methods=['GET'])
def get_naissances():
    naissances = Naissance.query.order_by(Naissance.id.desc()).all()
    return jsonify([n.to_dict() for n in naissances]), 200

@app.route('/api/naissances', methods=['POST'])
def add_naissance():
    data = request.json
    new_naissance = Naissance(
        date=data.get('date'),
        wilaya=data.get('wilaya'),
        nombre=data.get('nombre'),
        sexe=data.get('sexe', 'M'),
        age_mere=data.get('age_mere'),
        agent=data.get('agent')
    )
    db.session.add(new_naissance)
    db.session.commit()
    return jsonify({"success": True, "naissance": new_naissance.to_dict()}), 201

# Routes pour les décès
@app.route('/api/deces', methods=['GET'])
def get_deces():
    deces = Deces.query.order_by(Deces.id.desc()).all()
    return jsonify([d.to_dict() for d in deces]), 200

@app.route('/api/deces', methods=['POST'])
def add_deces():
    data = request.json
    new_deces = Deces(
        date=data.get('date'),
        wilaya=data.get('wilaya'),
        nombre=data.get('nombre'),
        sexe=data.get('sexe', 'M'),
        age=data.get('age'),
        cause=data.get('cause', 'Non précisée'),
        agent=data.get('agent')
    )
    db.session.add(new_deces)
    db.session.commit()
    return jsonify({"success": True, "deces": new_deces.to_dict()}), 201

# Routes pour les migrations
@app.route('/api/migrations', methods=['GET'])
def get_migrations():
    migrations = Migration.query.order_by(Migration.id.desc()).all()
    return jsonify([m.to_dict() for m in migrations]), 200

@app.route('/api/migrations', methods=['POST'])
def add_migration():
    data = request.json
    new_migration = Migration(
        date=data.get('date'),
        type=data.get('type'),
        pointEntree=data.get('pointEntree'),
        nombre=data.get('nombre'),
        nationalite=data.get('nationalite'),
        dureeSejour=data.get('dureeSejour'),
        agent=data.get('agent')
    )
    db.session.add(new_migration)
    db.session.commit()
    return jsonify({"success": True, "migration": new_migration.to_dict()}), 201

# Endpoint for live homepage adjustment
@app.route('/api/live_stats', methods=['GET'])
def get_live_stats():
    naissances = db.session.query(db.func.sum(Naissance.nombre)).scalar() or 0
    deces = db.session.query(db.func.sum(Deces.nombre)).scalar() or 0
    entrees = db.session.query(db.func.sum(Migration.nombre)).filter(Migration.type == 'entree', Migration.dureeSejour == 'plus_12mois').scalar() or 0
    sorties = db.session.query(db.func.sum(Migration.nombre)).filter(Migration.type == 'sortie', Migration.dureeSejour == 'plus_12mois').scalar() or 0
    
    adjustment = naissances - deces + entrees - sorties

    from datetime import date
    today_str = date.today().isoformat()
    n_today = db.session.query(db.func.sum(Naissance.nombre)).filter(Naissance.date == today_str).scalar() or 0
    d_today = db.session.query(db.func.sum(Deces.nombre)).filter(Deces.date == today_str).scalar() or 0
    e_today = db.session.query(db.func.sum(Migration.nombre)).filter(Migration.type == 'entree', Migration.dureeSejour == 'plus_12mois', Migration.date == today_str).scalar() or 0
    s_today = db.session.query(db.func.sum(Migration.nombre)).filter(Migration.type == 'sortie', Migration.dureeSejour == 'plus_12mois', Migration.date == today_str).scalar() or 0
    
    return jsonify({
        "adjustment": int(adjustment),
        "births_today": int(n_today),
        "deaths_today": int(d_today),
        "net_today": int(n_today - d_today + e_today - s_today)
    }), 200

# Initialiser la BD au lancement
init_db()

if __name__ == '__main__':
    app.run(debug=True, port=5000)
