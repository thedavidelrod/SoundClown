export const fetchSounds = () => (
  $.ajax({
    method: "GET",
    url: `api/sounds`,
  })
);

export const fetchSound = (id) => (
  $.ajax({
    method: `GET`,
    url: `api/sounds/${id}`,
  })
);

export const createSound = (sound) =>
  $.ajax({
    method: `POST`,
    url: `api/sounds`,
    processData: false,
    contentType: false,
    data: sound,
    dataType: "json",
  });

export const updateSound = (sound, id) =>
  $.ajax({
    method: `PATCH`,
    url: `api/sounds/${id}`,
    processData: false,
    contentType: false,
    data: { sound },
    dataType: "json",
  });

export const deleteSound = (id) => (
    $.ajax({
        method: "DELETE",
        url: `api/sounds/${id}`
    })
);

export const userSounds = (userId) => {
  return $.ajax({
    url: `/api/users/${userId}/sounds`,
    method: "GET",
  });
};


