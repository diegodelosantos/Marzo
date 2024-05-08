
DROP TABLE IF EXISTS CLIENTES;
CREATE TABLE CLIENTES
(CLIENTE_NO		SMALLINT(4) PRIMARY KEY,
 NOMBRE 		VARCHAR(25),
 LOCALIDAD         	VARCHAR(14),
 VENDEDOR_NO       	SMALLINT(4),
 DEBE			INTEGER(9),
 HABER			INTEGER(9),
 LIMITE_CREDITO    INTEGER(9)
)ENGINE=InnoDB;


DROP TABLE IF EXISTS PRODUCTOS;
CREATE TABLE PRODUCTOS
(PRODUCTO_NO  		SMALLINT(4) PRIMARY KEY,
 DESCRIPCION  		VARCHAR(30),
 PRECIO_ACTUAL 		INTEGER(8),
 STOCK_DISPONIBLE	INTEGER(9)
)ENGINE=InnoDB;


DROP TABLE IF EXISTS PEDIDOS;
CREATE TABLE PEDIDOS
(PEDIDO_NO         	SMALLINT(4) PRIMARY KEY,
 PRODUCTO_NO		SMALLINT(4),
 CLIENTE_NO 		SMALLINT(4),
 UNIDADES 	        SMALLINT(4),
 FECHA_PEDIDO      	DATE,
 FOREIGN KEY (PRODUCTO_NO) REFERENCES PRODUCTOS(PRODUCTO_NO),
 FOREIGN KEY (CLIENTE_NO) REFERENCES CLIENTES(CLIENTE_NO) 
)ENGINE=InnoDB;


INSERT INTO CLIENTES VALUES (101, 'DISTRIBUCIONES GOMEZ', 'MADRID', 7499, 0,0,3000);
INSERT INTO CLIENTES VALUES (102, 'LOGITRONICA S.L', 'BARCELONA', 7654,0,0,3000);
INSERT INTO CLIENTES VALUES (103, 'INDUSTRIAS LACTEAS S.A.', 'LAS ROZAS', 7844,0,0, 6000);
INSERT INTO CLIENTES VALUES (104, 'TALLERES ESTESO S.A.', 'SEVILLA', 7654, 0, 0, 3000);
INSERT INTO CLIENTES VALUES (105, 'EDICIONES SANZ', 'BARCELONA', 7499, 0,0,3000);
INSERT INTO CLIENTES VALUES (106, 'SIGNOLOGIC S.A.', 'MADRID', 7654,0,0,3000);
INSERT INTO CLIENTES VALUES (107, 'MARTIN Y ASOCIADOS S.L.', 'ARAVACA' , 7844,0,0, 6000);
INSERT INTO CLIENTES VALUES (108, 'MANUFACTURAS ALI S.A.', 'SEVILLA', 7654, 0, 0, 3000);


INSERT INTO PRODUCTOS VALUES(10,'MESA DESPACHO MOD. GAVIOTA', 550, 50);
INSERT INTO PRODUCTOS VALUES (20, 'SILLA DIRECTOR MOD. BUFALO', 670, 25);
INSERT INTO PRODUCTOS VALUES (30, 'ARMARIO NOGAL DOS PUERTAS', 460, 20);
INSERT INTO PRODUCTOS VALUES (40, 'MESA MODELO UNI�N',340, 15);
INSERT INTO PRODUCTOS VALUES (50, 'ARCHIVADOR CEREZO',1050, 20);
INSERT INTO PRODUCTOS VALUES (60, 'CAJA SEGURIDAD MOD B222', 280, 15);
INSERT INTO PRODUCTOS VALUES (70, 'DESTRUCTORA DE PAPEL A3',450, 25);
INSERT INTO PRODUCTOS VALUES (80, 'MODULO ORDENADOR MOD. ERGOS', 550, 25);


INSERT INTO PEDIDOS VALUES(1000, 20, 103, 3, '2005-10-06');
INSERT INTO PEDIDOS VALUES(1001, 50, 106, 2, '2005-10-06');
INSERT INTO PEDIDOS VALUES(1002, 10, 101, 4, '2005-10-07');
INSERT INTO PEDIDOS VALUES(1003, 20, 105, 4, '2005-10-16');
INSERT INTO PEDIDOS VALUES(1004, 40, 106, 8, '2005-10-20');
INSERT INTO PEDIDOS VALUES(1005, 30, 105, 2, '2005-10-20');
INSERT INTO PEDIDOS VALUES(1006, 70, 103, 3, '2005-11-03');
INSERT INTO PEDIDOS VALUES(1007, 50, 101, 2, '2005-11-06');
INSERT INTO PEDIDOS VALUES(1008, 10, 106, 6, '2005-11-16');
INSERT INTO PEDIDOS VALUES(1009, 20, 105, 2, '2005-11-26');
INSERT INTO PEDIDOS VALUES(1010, 40, 102, 3, '2005-12-08');
INSERT INTO PEDIDOS VALUES(1011, 30, 106, 2, '2005-12-15');
INSERT INTO PEDIDOS VALUES(1012, 10, 105, 3, '2005-12-06');
INSERT INTO PEDIDOS VALUES(1013, 30, 106, 2, '2005-12-06');
INSERT INTO PEDIDOS VALUES(1014, 20, 101, 4, '2000-01-07');
INSERT INTO PEDIDOS VALUES(1015, 70, 105, 4, '2000-01-16');
INSERT INTO PEDIDOS VALUES(1016, 30, 106, 7, '2000-01-18');
INSERT INTO PEDIDOS VALUES(1017, 20, 105, 6, '2000-01-20');



COMMIT;





DROP TABLE IF EXISTS VENDEDORES; 

CREATE TABLE VENDEDORES (
 IDVENDEDOR  VARCHAR(4) PRIMARY KEY,
 VNOMBRE  VARCHAR(40), 
 AREA      VARCHAR(35),
 COMISION float(10,2),
 TELEFONO VARCHAR(15),
 PAIS VARCHAR(25)
)ENGINE=InnoDB;

INSERT INTO VENDEDORES VALUES ('A007','Cenutrio','Kuala',0.15,'654354276','India');
INSERT INTO VENDEDORES VALUES ('A003','Tiburcio','Londres',0.13,'656264276','Inglaterra');
INSERT INTO VENDEDORES VALUES ('A008','Guanancio','New York',0.12,'987453276','USA');
INSERT INTO VENDEDORES VALUES ('A011','Leucoco','Kuala',0.15,'654354472','India');
INSERT INTO VENDEDORES VALUES ('A010','Sanapapurcio','Oslo',0.14,'938614276','Noruega');
INSERT INTO VENDEDORES VALUES ('A012','Lucinda','San Jose',0.12,'952964276','Costa Rica');
INSERT INTO VENDEDORES VALUES ('A005','Anderson','Berna',0.13,'937510276','Suiza');
INSERT INTO VENDEDORES VALUES ('A001','Neumococo','Kuala',0.14,'654353877','India');
INSERT INTO VENDEDORES VALUES ('A002','Makako','Paris',0.11,'724354276','Francia');
INSERT INTO VENDEDORES VALUES ('A006','Teodosio','Madrid',0.15,'685564276','Espa�a');
INSERT INTO VENDEDORES VALUES ('A004','Lumbreras','Roma',0.15,'987453886','Italia');
INSERT INTO VENDEDORES VALUES ('A009','Carmelocoton','Tokio',0.11,'664554472','Japon');
COMMIT;



DROP TABLE IF EXISTS CLIENTE; 

CREATE TABLE CLIENTE (
 IDCLIENTE    VARCHAR(6) PRIMARY KEY,
 CNOMBRE  VARCHAR(40),
 CIUDAD   VARCHAR(35),
 AREATRABAJO       VARCHAR(35) ,
 PAIS VARCHAR(20),
 CATEGORIA  tinyint,
 CUENTAPORPAGAR  float(12,2),
 TELEFONO VARCHAR(17),
 IDVENDEDOR   VARCHAR(4) NOT NULL REFERENCES VENDEDORES(IDVENDEDOR)
)ENGINE=InnoDB;

INSERT INTO CLIENTE VALUES ('C00013','Holmes','Londres','Londres','UK',2,4000,'774354276','A003');
INSERT INTO CLIENTE VALUES ('C00001','Michael','New York','New York','USA',2,6000,'774354276','A008');
INSERT INTO CLIENTE VALUES ('C00020','Albert','New York','New York','USA',3,6000,'774354276','A008');
INSERT INTO CLIENTE VALUES ('C00025','Ravindran','Bangalore','Bangalore','India',2,4000,'774354276','A011');
INSERT INTO CLIENTE VALUES ('C00024','Cook','Londres','Londres','UK',2,6000,'774354276','A006');
INSERT INTO CLIENTE VALUES ('C00015','Stuart','Londres','Londres','UK',1,11000,'774354276','A003');
INSERT INTO CLIENTE VALUES ('C00002','Bolt','New York','New York','USA',3,3000,'774354276','A008');
INSERT INTO CLIENTE VALUES ('C00018','Fleming','Brisban','Brisban','Australia',2,9000,'774354276','A005');
INSERT INTO CLIENTE VALUES ('C00021','Jacks','Brisban','Brisban','Australia',1,7000,'774354276','A005');
INSERT INTO CLIENTE VALUES ('C00019','Yearannaidu','Chennai','Chennai','India',1,7000,'774354276','A010');
INSERT INTO CLIENTE VALUES ('C00005','Sasikant','Mumbai','Mumbai','India',2,7000,'774354276','A002');
INSERT INTO CLIENTE VALUES ('C00007','Winston','Brisban','Brisban','Australia',1,9000,'774354276','A010');
INSERT INTO CLIENTE VALUES ('C00022','Karl','Torento','torento','Canada',1,9000,'774354276','A002');
INSERT INTO CLIENTE VALUES ('C00004','Shilton','Londres','Londres','UK',2,6000,'774354276','A005');
INSERT INTO CLIENTE VALUES ('C00023','Cebollez','Sanzoles','Zamora','Espa�a',3,3000,'774354276','A006');
INSERT INTO CLIENTE VALUES ('C00006','Srinivas','Bangalore','Bangalore','India',2,11000,'774354276','A004');
INSERT INTO CLIENTE VALUES ('C00010','Steven','San Jose','San Jose','USA',1,4000,'774354276','A009');
INSERT INTO CLIENTE VALUES ('C00012','Karolina','Munich','Munich','Alemania',1,5000,'774354276','A007');
INSERT INTO CLIENTE VALUES ('C00008','Martin','Torento','Torento','Canada',2,9000,'774354276','A012');
INSERT INTO CLIENTE VALUES ('C00003','Ramesh','Mumbai','Mumbai','India',3,3000,'774354276','A004');
INSERT INTO CLIENTE VALUES ('C00009','Rangarappa','Bangalore','Bangalore','India',2,5000,'774354276','A004');
INSERT INTO CLIENTE VALUES ('C00014','Pochezno','Turin','Turin','Italia',2,8000,'774354276','A002');
INSERT INTO CLIENTE VALUES ('C00016','Sundariya','Chennai','Chennai','India',3,12000,'774354276','A001');
INSERT INTO CLIENTE VALUES ('C00011','Zampabollos','Zaratan','Valladolid','Espa�a',2,7000,'774354276','A007');



DROP TABLE IF EXISTS ENCARGOS; 

CREATE TABLE ENCARGOS (
 IDENCARGO    integer(6) PRIMARY KEY,
 CANTIDAD  float(12,2),
 SE�AL   float(12,2),
 FECHA       DATE ,
 IDCLIENTE VARCHAR(6)REFERENCES CLIENTE(IDCLIENTE),
 IDVENDEDOR   VARCHAR(4) REFERENCES VENDEDORES(IDVENDEDOR)
)ENGINE=InnoDB;



INSERT INTO ENCARGOS VALUES (200100,1000,600,'2008-08-01','C00013','A003');
INSERT INTO ENCARGOS VALUES (200110,3000,500,'2008-04-15','C00009','A010');
INSERT INTO ENCARGOS VALUES (200107,4500,900,'2008-08-30','C00007','A010');
INSERT INTO ENCARGOS VALUES (200112,2000,400,'2008-05-30','C00016','A007');
INSERT INTO ENCARGOS VALUES (200113,4000,600,'2008-06-19','C00004','A002');
INSERT INTO ENCARGOS VALUES (200102,2000,300,'2008-05-25','C00012','A012');
INSERT INTO ENCARGOS VALUES (200114,3500,2000,'2008-08-15','C00002','A008');
INSERT INTO ENCARGOS VALUES (200122,2500,400,'2008-09-16','C00003','A004');
INSERT INTO ENCARGOS VALUES (200118,500,100,'2008-07-20','C00005','A006');
INSERT INTO ENCARGOS VALUES (200119,4000,700,'2008-09-16','C00007','A010');
INSERT INTO ENCARGOS VALUES (200121,1500,600,'2008-09-23','C00008','A004');
INSERT INTO ENCARGOS VALUES (200130,2500,400,'2008-07-30','C00006','A011');
INSERT INTO ENCARGOS VALUES (200134,4200,1800,'2008-09-25','C00004','A005');
INSERT INTO ENCARGOS VALUES (200108,4000,600,'2008-02-15','C00008','A004');
INSERT INTO ENCARGOS VALUES (200103,1500,700,'2008-05-15','C00007','A005');
INSERT INTO ENCARGOS VALUES (200105,2500,500,'2008-07-18','C00001','A011');
INSERT INTO ENCARGOS VALUES (200109,3500,800,'2008-07-30','C00011','A010');
INSERT INTO ENCARGOS VALUES (200101,3000,1000,'2008-07-15','C00001','A008');
INSERT INTO ENCARGOS VALUES (200111,1000,300,'2008-07-10','C00002','A008');
INSERT INTO ENCARGOS VALUES (200104,1500,500,'2008-03-13','C00006','A004');
INSERT INTO ENCARGOS VALUES (200106,2500,700,'2008-04-20','C00005','A002');
INSERT INTO ENCARGOS VALUES (200125,2000,600,'2008-10-10','C00018','A005');
INSERT INTO ENCARGOS VALUES (200117,800,200,'2008-10-20','C00014','A001');
INSERT INTO ENCARGOS VALUES (200123,500,100,'2008-07-20','C00003','A002');


COMMIT;

