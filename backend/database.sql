-- Script SQL pour la création de la base de données DemoMauritanie
-- Vous pouvez importer ce fichier directement dans PHPMyAdmin

CREATE DATABASE IF NOT EXISTS `demo_mauritanie` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `demo_mauritanie`;

-- Structure de la table `users`
CREATE TABLE IF NOT EXISTS `users` (
  `id` varchar(36) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` varchar(20) NOT NULL,
  `affectation` varchar(100) NOT NULL,
  `nomComplet` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insertion des utilisateurs de démonstration
INSERT IGNORE INTO `users` (`id`, `username`, `password`, `role`, `affectation`, `nomComplet`) VALUES
(UUID(), 'admin_ansade', 'admin123', 'ansade', 'Tous (National)', 'Administrateur ANSADE'),
(UUID(), 'medecin_nkc', 'sante123', 'sante', 'Nouakchott Ouest', 'Médecin · Nouakchott Ouest'),
(UUID(), 'medecin_ndb', 'sante456', 'sante', 'Dakhlet Nouadhibou', 'Médecin · Nouadhibou'),
(UUID(), 'agent_aero_nkc', 'aero123', 'migration', 'Aéroport NKC', 'Agent · Aéroport Nouakchott'),
(UUID(), 'agent_aero_ndb', 'aero456', 'migration', 'Aéroport NDB', 'Agent · Aéroport Nouadhibou'),
(UUID(), 'agent_port_ndb', 'port123', 'migration', 'Port Nouadhibou', 'Agent · Port de Nouadhibou');

-- Structure de la table `naissances`
CREATE TABLE IF NOT EXISTS `naissances` (
  `id` varchar(36) NOT NULL,
  `date` varchar(20) NOT NULL,
  `wilaya` varchar(100) NOT NULL,
  `nombre` int(11) NOT NULL DEFAULT 0,
  `sexe` enum('M','F') NOT NULL DEFAULT 'M',
  `agent` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Structure de la table `deces`
CREATE TABLE IF NOT EXISTS `deces` (
  `id` varchar(36) NOT NULL,
  `date` varchar(20) NOT NULL,
  `wilaya` varchar(100) NOT NULL,
  `nombre` int(11) NOT NULL DEFAULT 0,
  `sexe` enum('M','F') NOT NULL DEFAULT 'M',
  `cause` varchar(200) DEFAULT NULL,
  `agent` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Structure de la table `migrations`
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` varchar(36) NOT NULL,
  `date` varchar(20) NOT NULL,
  `type` varchar(20) NOT NULL,
  `pointEntree` varchar(100) NOT NULL,
  `nombre` int(11) NOT NULL DEFAULT 0,
  `nationalite` varchar(100) NOT NULL,
  `dureeSejour` varchar(50) NOT NULL,
  `agent` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
