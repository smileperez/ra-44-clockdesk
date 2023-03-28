import React, {useState} from 'react';
import Whatch from './Whatch';

function Сlockboard(callback) {

    const [whatchers, setWhatchers] = useState([]);
    const [city, setCity] = useState();
    const [zone, setZone] = useState();

    const addWatchers = event => {
        event.preventDefault();

        if (!city || !zone) return;
        
        setWhatchers([
            ...whatchers,
            {
                id: Date.now(),
                city: city,
                zone: zone
            }
        ]);
    }

    const removeWatchers = id => {
        setWhatchers(prevWhatchers => prevWhatchers.filter(item => item.id !== id));
    };

    return (
        <>
            <form className='form' onSubmit={addWatchers}>
                <div className='form-block'>
                    <label className='input-label'>Название города</label>
                    <input
                        className='form-input'
                        type='text'
                        value={city}
                        onChange={event => setCity(event.target.value)}
                    />
                </div>
                <div className='form-block'>
                    <label className='input-label'>Временная зона</label>
                    <input
                        className='form-input'
                        type='number'
                        value={zone}
                        onChange={event => setZone(event.target.value)}
                    />
                </div>
                <div className='form-block revers-block'>
                    <input className='form-btn' type='submit' value={'Добавить'} />
                </div>
            </form>
            <div className='clockboard'>
                {whatchers.map(item => (
                    <Whatch city={item.city} zone={item.zone} callback={()=>removeWatchers(item.id)} />
                ))}
            </div>
            
        </>
    );
}

export default Сlockboard;