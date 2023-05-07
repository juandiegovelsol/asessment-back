export const computeDataOneList = (userList) => {
  const { iduser, email, list } = userList;
  const { idlist, listname, favs } = list[0];
  const computed = { iduser, email, list: { idlist, listname, favs } };
  return computed;
};
