export const login = (user) =>
  $.ajax({
    method: "POST",
    url: "/api/session",
    data: { user },

  });

export const signup = (user) => {
    return $.ajax({
    method: "POST",
    url: "/api/users",
    processData: false,
    contentType: false,
    data: user,
     dataType: "json", 
  })
};

export const logout = () =>
  $.ajax({
    method: "DELETE",
    url: "/api/session",
  });
