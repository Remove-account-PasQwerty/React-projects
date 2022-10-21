import { useContext } from 'react';
import './Player.css'
import { Context } from '../../context.js';

const Player = () =>{

    const imagePlayer = process.env.PUBLIC_URL + '/img/Player/img_laugh.png';

    const { bamboo, setBamboo, modBaboo } = useContext(Context);

    const clickHandler = () =>{
        if(modBaboo === 0)
        {
            setBamboo(bamboo => bamboo + 1);
        }
        else
        {
            const TotalAmount = bamboo + modBaboo;
            setBamboo(TotalAmount);
        }
        
    };

    return (
        <div className="Player">
            <img className="Player__img" src={imagePlayer} onClick={clickHandler} alt="" />
        </div>
    );
}

export default Player;