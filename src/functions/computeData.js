export const computeData = (list) => {
  let listA = [];
  if (list[0] === undefined) {
    listA = [list];
  } else {
    listA = [...list];
  }

  const computed = listA.map(({ idlist, listname, user, favs }) => {
    return { idlist, listname, useremail: user.email, favs };
  });

  if (computed.length === 1) {
    return computed[0];
  } else {
    return computed;
  }
};
