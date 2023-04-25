-- DropForeignKey
ALTER TABLE `favs` DROP FOREIGN KEY `fk_favs_list1`;

-- DropForeignKey
ALTER TABLE `list` DROP FOREIGN KEY `fk_list_user`;

-- AddForeignKey
ALTER TABLE `favs` ADD CONSTRAINT `fk_favs_list1` FOREIGN KEY (`list_idlist`) REFERENCES `list`(`idlist`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `list` ADD CONSTRAINT `fk_list_user` FOREIGN KEY (`user_iduser`) REFERENCES `user`(`iduser`) ON DELETE CASCADE ON UPDATE CASCADE;
