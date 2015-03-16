$(function() {

  var SearchBar = React.createClass({

    render: function() {
      return (
        <div className="box">
          <div className="container-1">
            <form>
              <span className="icon"><i className="fa fa-search"></i></span>
              <input type="search" id="search" placeholder="Search..." value={this.props.value} onClick={this.props.onClick}/>
              <input type="submit" />
            </form>
          </div>
        </div>
      );
    }

  });

  var SearchBox = React.createClass({

    render: function() {
      return (
        <div className="search-box">
          <SearchBar value={this.props.searchbar} onClick={this.props.onClick}/>
        </div>
      );
    }
 });

  var onClick = function(e){
    var value = e.target.value;
    console.log(value);
  }

  var searching = React.render(<SearchBox/>, document.body);
  

});//end entire function