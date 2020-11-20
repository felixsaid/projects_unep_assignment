-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 20, 2020 at 06:56 PM
-- Server version: 8.0.22
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `projects_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
CREATE TABLE IF NOT EXISTS `project` (
  `projectId` int NOT NULL AUTO_INCREMENT,
  `projectRef` varchar(255) NOT NULL,
  `countryName` varchar(250) NOT NULL,
  `implementingOffice` varchar(255) NOT NULL,
  `projectTitle` varchar(255) NOT NULL,
  `grantAmount` float NOT NULL,
  `dateFromGcf` date NOT NULL,
  `startDate` date NOT NULL,
  `projectDuration` int NOT NULL,
  `endDate` date NOT NULL,
  `projectReadiness` varchar(255) NOT NULL,
  `readinessType` varchar(255) NOT NULL,
  `firstDisbursement` float NOT NULL,
  `projectStatus` varchar(255) NOT NULL,
  PRIMARY KEY (`projectId`),
  KEY `countryId` (`countryName`),
  KEY `countryName` (`countryName`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`projectId`, `projectRef`, `countryName`, `implementingOffice`, `projectTitle`, `grantAmount`, `dateFromGcf`, `startDate`, `projectDuration`, `endDate`, `projectReadiness`, `readinessType`, `firstDisbursement`, `projectStatus`) VALUES
(3, 'ABCDE-001', 'Rwanda and Kenya', 'Rwanda and Kenya Office', 'Building capacity to advance National Adaptation Plan Process in the Dominican Republic', 324000, '2019-01-01', '2019-02-02', 12, '2020-04-04', 'Readiness', 'Capacity building', 200000, 'under implementation'),
(4, 'ABCDE-001', 'Rwanda and Kenya', 'Rwanda and Kenya Office', 'Building capacity to advance National Adaptation Plan Process in the Dominican Republic', 324000, '2019-01-01', '2019-02-02', 12, '2020-04-04', 'Readiness', 'Capacity building', 200000, 'under implementation'),
(5, 'ABCDE-001', 'Rwanda and Kenya', 'Rwanda and Kenya Office', 'Building capacity to advance National Adaptation Plan Process in the Dominican Republic', 324000, '2019-01-01', '2019-02-02', 12, '2020-04-04', 'Readiness', 'Capacity building', 200000, 'under implementation');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
