$(function() {

  var SearchBar = React.createClass({

    getInitialState: function() {
      return {keyword: ""};

    },

    updateKeywords: function(e){
      this.setState({keyword: e.target.value})

    },

    placeholderSubmit: function(e){
      e.preventDefault();
      this.props.onSubmit(this.state.keyword)
    },

    render: function() {
      return (
        <div className="box">
          <div className="container-1">
            <form onSubmit={this.placeholderSubmit} >
              <span className="icon"><i className="fa fa-search"></i></span>
              <input type="search" id="search" placeholder="Search..." value={this.state.keyword} onChange={this.updateKeywords}/>
              <input type="submit" value="submit" />
            </form>
          </div>
        </div>
      );
    }

  });


  var SearchBox = React.createClass({

    onSubmit: function(keywords) {
     console.log(keywords)
    },

    render: function() {
      return (
        <div className="search-box">
          <SearchBar onSubmit={this.onSubmit}/>
        </div>
      );
    }
  });


  var searching = React.render(<SearchBox/>, document.body);
  

});//end entire function










