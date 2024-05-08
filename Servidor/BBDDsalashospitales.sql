-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 12-02-2018 a las 19:13:01
-- Versión del servidor: 5.5.8
-- Versión de PHP: 5.3.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `ejercicios`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hospital`
--

CREATE TABLE IF NOT EXISTS `hospital` (
  `HOSPITAL_COD` tinyint(2) NOT NULL,
  `NOMBRE` varchar(12) DEFAULT NULL,
  `DIRECCION` varchar(20) DEFAULT NULL,
  `TELEFONO` varchar(10) DEFAULT NULL,
  `NUM_CAMAS` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`HOSPITAL_COD`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcar la base de datos para la tabla `hospital`
--

INSERT INTO `hospital` (`HOSPITAL_COD`, `NOMBRE`, `DIRECCION`, `TELEFONO`, `NUM_CAMAS`) VALUES
(13, 'Provincial', 'O Donell 50', '964-426400', 502),
(18, 'General', 'Atocha s/n', '595-311122', 987),
(22, 'La Paz', 'Castellana 1000', '923-541134', 412),
(45, 'San Carlos', 'Ciudad Universitaria', '597-150090', 845);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sala`
--

CREATE TABLE IF NOT EXISTS `sala` (
  `HOSPITAL_COD` tinyint(2) NOT NULL,
  `SALA_COD` tinyint(2) NOT NULL,
  `NOMBRE` varchar(20) DEFAULT NULL,
  `NUM_CAMA` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`HOSPITAL_COD`,`SALA_COD`),
  KEY `HOSPITAL_COD` (`HOSPITAL_COD`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcar la base de datos para la tabla `sala`
--

INSERT INTO `sala` (`HOSPITAL_COD`, `SALA_COD`, `NOMBRE`, `NUM_CAMA`) VALUES
(13, 3, 'Cuidados intensivos', 21),
(13, 6, 'Psiquiátrico', 67),
(18, 3, 'Cuidados intensivos', 10),
(18, 4, 'Cardiología', 53),
(22, 1, 'Recuperación', 10),
(22, 2, 'Maternidad', 34),
(22, 6, 'Traumatologia', 118),
(45, 1, 'Recuperación', 13),
(45, 2, 'Oftalmologia', 24),
(45, 4, 'Cardiología', 55),
(45, 5, 'Podologo', 17),
(45, 6, 'Enfermedades secas', 30);

--
-- Filtros para las tablas descargadas (dump)
--

--
-- Filtros para la tabla `sala`
--
ALTER TABLE `sala`
  ADD CONSTRAINT `sala_ibfk_1` FOREIGN KEY (`HOSPITAL_COD`) REFERENCES `hospital` (`HOSPITAL_COD`);
