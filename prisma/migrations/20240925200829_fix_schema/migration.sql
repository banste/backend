-- CreateTable
CREATE TABLE `admin` (
    `id_usuario` INTEGER NOT NULL,

    PRIMARY KEY (`id_usuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ayudante` (
    `id_usuario` INTEGER NOT NULL,

    PRIMARY KEY (`id_usuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `especial` (
    `descripcion` VARCHAR(1000) NULL,
    `motivo` VARCHAR(1000) NULL,
    `id_prestamo` INTEGER NOT NULL,
    `id_usuario` INTEGER NULL,

    INDEX `id_usuario`(`id_usuario`),
    PRIMARY KEY (`id_prestamo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `prestamo` (
    `id_prestamo` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha_inicio` DATE NULL,
    `fecha_fin` DATE NULL,
    `id_uta` VARCHAR(20) NULL,

    INDEX `id_uta`(`id_uta`),
    PRIMARY KEY (`id_prestamo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `regular` (
    `hora_inicio` VARCHAR(6) NULL,
    `hora_fin` VARCHAR(6) NULL,
    `id_prestamo` INTEGER NOT NULL,
    `rut` VARCHAR(12) NULL,
    `id_usuario` INTEGER NULL,

    INDEX `id_usuario`(`id_usuario`),
    INDEX `rut`(`rut`),
    PRIMARY KEY (`id_prestamo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sanciones` (
    `grado` INTEGER NULL,
    `id_sanciones` INTEGER NOT NULL AUTO_INCREMENT,
    `comentario` VARCHAR(1000) NULL,
    `estado_sancion` VARCHAR(9) NULL,
    `id_usuario` INTEGER NULL,
    `rut` VARCHAR(12) NULL,

    INDEX `id_usuario`(`id_usuario`),
    INDEX `rut`(`rut`),
    PRIMARY KEY (`id_sanciones`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categoria` (
    `id_categoria` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre_categoria` VARCHAR(50) NULL,
    `fecha_creacion` VARCHAR(50) NULL,

    PRIMARY KEY (`id_categoria`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `estudiante` (
    `p_nombre` VARCHAR(30) NULL,
    `p_apellido` VARCHAR(30) NOT NULL,
    `rut` VARCHAR(12) NOT NULL,
    `m_apellido` VARCHAR(30) NULL,
    `s_nombre` VARCHAR(30) NULL,
    `correo` VARCHAR(50) NULL,
    `direccion` VARCHAR(60) NULL,
    `fono` VARCHAR(9) NULL,
    `ingreso` INTEGER NULL,
    `estado_estudiante` VARCHAR(9) NULL,

    PRIMARY KEY (`rut`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `recurso` (
    `marca` VARCHAR(50) NULL,
    `descripcion` VARCHAR(3000) NULL,
    `fecha_ingreso` DATE NULL,
    `modelo` VARCHAR(50) NULL,
    `id_categoria` INTEGER NULL,
    `id_dici` VARCHAR(10) NULL,
    `id_uta` VARCHAR(20) NOT NULL,
    `ubicacion` VARCHAR(500) NULL,
    `id_recurso` INTEGER NULL,

    INDEX `id_categoria`(`id_categoria`),
    PRIMARY KEY (`id_uta`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuario` (
    `id_usuario` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(30) NULL,
    `usuario` VARCHAR(30) NULL,
    `apellido` VARCHAR(30) NULL,
    `correo` VARCHAR(50) NULL,
    `password` VARCHAR(30) NULL,
    `rut` VARCHAR(12) NULL,

    PRIMARY KEY (`id_usuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `admin` ADD CONSTRAINT `admin_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario`(`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `ayudante` ADD CONSTRAINT `ayudante_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario`(`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `especial` ADD CONSTRAINT `especial_ibfk_1` FOREIGN KEY (`id_prestamo`) REFERENCES `prestamo`(`id_prestamo`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `especial` ADD CONSTRAINT `especial_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `admin`(`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `prestamo` ADD CONSTRAINT `prestamo_ibfk_1` FOREIGN KEY (`id_uta`) REFERENCES `recurso`(`id_uta`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `regular` ADD CONSTRAINT `regular_ibfk_1` FOREIGN KEY (`id_prestamo`) REFERENCES `prestamo`(`id_prestamo`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `regular` ADD CONSTRAINT `regular_ibfk_2` FOREIGN KEY (`rut`) REFERENCES `estudiante`(`rut`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `regular` ADD CONSTRAINT `regular_ibfk_3` FOREIGN KEY (`id_usuario`) REFERENCES `ayudante`(`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `sanciones` ADD CONSTRAINT `sanciones_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario`(`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `sanciones` ADD CONSTRAINT `sanciones_ibfk_2` FOREIGN KEY (`rut`) REFERENCES `estudiante`(`rut`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `recurso` ADD CONSTRAINT `recurso_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categoria`(`id_categoria`) ON DELETE NO ACTION ON UPDATE NO ACTION;
