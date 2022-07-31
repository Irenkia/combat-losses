import React, { Component } from "react";
import "./CSS/stylesGenLosses.css";

// const apiURL = "https://russianwarship.rip/api-documentation/document/v1";
const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";

class GeneralLosses extends Component {
  constructor() {
    super();
    this.state = {
      errorMessage: null,
      isLoaded: false,
      allLosses: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch(apiURL)
      .then((response) => response.json())
      .then(
        (response) => {
          this.setState({ isLoaded: true, allLosses: response });
          console.log({ allLosses: response });
        },
        (error) => {
          this.setState({ isLoaded: true, errorMessage: error });
          console.log(this.state.errorMessage);
        }
        //error => console.log(error)
      );
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log({ [name]: value });
  }

  render() {
    const { errorMessage, isLoaded } = this.state;
    if (errorMessage) {
      return <p>Ошибка: {errorMessage.message}</p>;
    } else if (!isLoaded) {
      return <p>Загрузка...</p>;
    } else {
      return (
        <div>
          {/* Получить данные из API */}
          <div className="fetch-button">
            <button
              type="text"
              value={this.state.allLosses}
              onClick={this.handleChange}
            >
              Получить данные
            </button>
            <br />
          </div>

          {/* Отображение данных из API*/}
          <div className="losses">
            {this.state.allLosses.map((item, index) => {
              return (
                // <div key={index} className="losse">
                //   <h3>Дата {item.date}</h3>
                //   {/* <img alt={"picture"}>{item.icon}</img> */}
                //   <p>{item.icon}</p>
                //   <h2>{item.title}</h2>
                //   <div className="details">
                //     <p>{item.example}</p> <br />
                //   </div>
                // </div>
                <div key={index} className="book">
                  <h3>Книга {item.isbn}</h3>
                  <h2>{item.name}</h2>
                  <div className="details">
                    <p>👨: {item.authors}</p> <br />
                    <p>📖: {item.numberOfPages} страниц</p> <br />
                    <p>🏘️: {item.country}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  }
}

export default GeneralLosses;
