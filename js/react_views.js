$(function() {

  var SearchBar = React.createClass({displayName: "SearchBar",

    render: function() {
      return (
        React.createElement("div", {className: "box"}, 
          React.createElement("div", {className: "container-1"}, 
            React.createElement("form", null, 
              React.createElement("span", {className: "icon"}, React.createElement("i", {className: "fa fa-search"})), 
              React.createElement("input", {type: "search", id: "search", placeholder: "Search...", value: this.props.value, onClick: this.props.onClick}), 
              React.createElement("input", {type: "submit"})
            )
          )
        )
      );
    }

  });

  var SearchBox = React.createClass({displayName: "SearchBox",

    render: function() {
      return (
        React.createElement("div", {className: "search-box"}, 
          React.createElement(SearchBar, {value: this.props.searchbar, onClick: this.props.onClick})
        )
      );
    }
 });

  var onClick = function(e){
    var value = e.target.value;
    console.log(value);
  }

  var searching = React.render(React.createElement(SearchBox, null), document.body);
  

});//end entire function