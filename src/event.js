import React from "react";
class Event  extends React.Component {
    constructor(){
        super();
        this.state={
            nama :'Agus'
        }
    }
    clickMe(nama){
        console.log('kirim pesan kepada' + nama);
    }
    changeText(e){
        e.target.innerHTML ='Kirim Pesan ';

    }

    changeAgain(e){
        e.target.innerHTML = 'Click Me';
    }
    sapa (e){
        this.setState({
            nama : e.target.value
        })
    }

    render() {
      return(
        <div>
            {/* <button onClick={this.clickMe.bind(this, 'alex')}>Click Me</button> */}
            {/* <button onClick={(e) => this.clickMe('Alex' , e)}>Click Me</button> */}
            {/* <button onClick={this.clickMe.bind(this, 'Agus')} onMouseEnter={(e) => this.changeText(e)} onMouseOut={(e) => this.changeAgain(e)}>Click Me</button> */}

            <h1>Hallo : {this.state.nama}</h1>
            <input type={'text'} onChange={(e)=> this.sapa(e)}></input>
        </div>
      )   
    }

}
export default Event;