-- CreateTable
CREATE TABLE `favs` (
    `idfavs` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(45) NULL,
    `description` VARCHAR(255) NULL,
    `link` VARCHAR(255) NULL,
    `list_idlist` INTEGER NOT NULL,

    INDEX `fk_favs_list1_idx`(`list_idlist`),
    PRIMARY KEY (`idfavs`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `list` (
    `idlist` INTEGER NOT NULL AUTO_INCREMENT,
    `listname` VARCHAR(255) NULL,
    `user_iduser` INTEGER NOT NULL,

    UNIQUE INDEX `idlist_UNIQUE`(`idlist`),
    INDEX `fk_list_user_idx`(`user_iduser`),
    PRIMARY KEY (`idlist`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `iduser` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `iduser_UNIQUE`(`iduser`),
    PRIMARY KEY (`iduser`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `favs` ADD CONSTRAINT `fk_favs_list1` FOREIGN KEY (`list_idlist`) REFERENCES `list`(`idlist`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `list` ADD CONSTRAINT `fk_list_user` FOREIGN KEY (`user_iduser`) REFERENCES `user`(`iduser`) ON DELETE NO ACTION ON UPDATE NO ACTION;
