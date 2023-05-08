// This function handles the form submission
function handleSubmit(event) {
    event.preventDefault(); // prevent the default form behavior
  
    const title = $('#title-input').val();
    const rating = $('#rating-input').val();
  
    // Create a new movie element
    const movie = $('<div class="movie"></div>');
    const titleElement = $('<div class="movie-title"></div>').text(title);
    const ratingElement = $('<div class="movie-rating"></div>').text(rating);
    const removeButton = $('<button>Remove</button>');
  
    // Add the movie elements to the movie element
    movie.append(titleElement, ratingElement, removeButton);
  
    // Add the movie to the movie list
    $('#movie-list').append(movie);
  
    // Set up the remove button
    removeButton.click(function () {
      movie.remove();
    });
  
    // Clear the form
    $('#title-input').val('');
    $('#rating-input').val('');
  }
  
  // Attach the submit event handler to the form
  $('#submit-button').click(handleSubmit);
  
  // Attach the click event handlers to the sort buttons
  $('.sort-button').click(function () {
    const sortBy = $(this).data('sort-by');
    sortMovies(sortBy);
  });
  
  // This function sorts the movies by the specified property
  function sortMovies(sortBy) {
    const movies = $('#movie-list .movie').toArray();
  
    movies.sort
  }