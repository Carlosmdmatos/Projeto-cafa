CREATE TABLE `tabela` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `valor` double DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci