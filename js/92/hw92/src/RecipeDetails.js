import React, {useState, useEffect} from 'react';
import ListComponent from './ListComponent';


export default function RecipeDetails(props) {

    const { name, ingredients, directions, picture } = props.recipe;
    const [state, setState] = useState();
    const {showPicture": true} = state;
    return (
        <div>
            <>
          <h2>{name}</h2>
          {state.showPicture && <img style={{ width: '200px', height: '200px' }}  src={picture} alt={name} />}
          <br/>
          <button onClick={this.togglePicture} className="btn btn-secondary">{this.state.showPicture?'hide':'show'}</button>
          <ListComponent title="Ingredients" items={ingredients} />
          <ListComponent title="directions" items={directions} />
        </>
        </div>
    )
}


/*export default class RecipeDetails extends Component {
    state = {
      showPicture: true
    }
  
    togglePicture = () => {
      this.setState({
        showPicture: !this.state.showPicture
      });
    }
  
    render() {
      const { name, ingredients, directions, picture } = this.props.recipe;
      return (
        <>
          <h2>{name}</h2>
          {this.state.showPicture && <img style={{ width: '200px', height: '200px' }} className="img-thumbnail" src={picture} alt={name} />}
          <br/>
          <button onClick={this.togglePicture} className="btn btn-secondary">{this.state.showPicture?'hide':'show'}</button>
          <ListComponent title="Ingredients" items={ingredients} />
          <ListComponent title="directions" items={directions} />
        </>
      );
    }
  }*/