class CardList extends React.Component {
  render() {
    return this.props.profiles.map( profile => <Card {...profile} />);
  }
}

class Card extends React.Component {
  render() {
    return (
      <div className="github-profile">
        <img src="https://placehold.it/75" />
        <div className="info">
          <div className="name">{this.props.name}</div>
          <div className="company">{this.props.company}</div>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  const testData = [
    {
      name: "Tushar Srivastava",
      company: "Cvent"
    }, {
      name: "Pranjul Srivastava",
      company: "Ekokat"
    }, {
      name: "Rajni Srivastava",
      company: "Housewife"
    }
  ];
  render() {
    return (
      <div>
          <div className="header">
            {this.props.title}
          </div>
          <CardList profiles={this.testData}/> 
      </div>
   );   
  };
}

ReactDOM.render(
	<App title="The GitHub Cards App" />,
  mountNode,
);
