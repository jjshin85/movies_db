
// var MoviesList = React.createClass({
//
//   mixins: [SetIntervalMixin],
//   getInitialState: function(){
//     return { seconds: 0,  movies: this.props.movies };
//   },
//
//   componentDidMount: function(){
//     this.setInterval(this.movies, 3000000000);
//   },
//
//   movies: function(query){
//     var url;
//     if(query != null){
//       url = "/movies?query=" + query.replace(" ", "+");
//     }
//     $.ajax({
//       url: url || "/movies",
//       dataType: 'json',
//       type: 'GET',
//       cache: false,
//       success: function(data){
//         this.setState({movies: data});
//       }.bind(this)
//     });
//   },
//
//   handleSearch: function(query){
//     this.props.addNew(this.state.newFriend);
//   },
//
//   render: function()
//   {
//     return (<div className='movies_container'>{ this.state.movies.map(function (key, value)
//       {
//         return <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={key.id} >
//                 <div className='movie'>
//                   <div className='background_overlay'></div>
//                   <div className='image_container'>
//                     <img className='movie_image' src={ BASE_IMAGE_URL + image_size_sm + key.poster_path }/>
//                   </div>
//                   <div className='text_container'>
//                     <p className="movie_overview">{key.overview}</p>
//                     <div className="title_area">
//                       <h4 className='movie_title'>{key.title}</h4>
//                     </div>
//                   </div>
//                 </div>
//               </div>;
//       })}
//     </div>)
//   }
// });
//
