$(function() {

  var SearchBar = React.createClass({displayName: "SearchBar",

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
        React.createElement("div", {className: "box"}, 
          React.createElement("div", {className: "container-1"}, 
            React.createElement("form", {onSubmit: this.placeholderSubmit}, 
              React.createElement("span", {className: "icon"}, React.createElement("i", {className: "fa fa-search"})), 
              React.createElement("input", {type: "search", id: "search", placeholder: "Search...", value: this.state.keyword, onChange: this.updateKeywords}), 
              React.createElement("input", {type: "submit", value: "submit"})
            )
          )
        )
      );
    }

  });


  var SearchBox = React.createClass({displayName: "SearchBox",

    onSubmit: function(keywords) {
     console.log(keywords)
    },

    render: function() {
      return (
        React.createElement("div", {className: "search-box"}, 
          React.createElement(SearchBar, {onSubmit: this.onSubmit})
        )
      );
    }
  });




  var searching = React.render(React.createElement(SearchBox, null), document.body);
  

});//end entire function










