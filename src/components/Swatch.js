import React from 'react';
import Slider from './Slider'

export default function Swatch(props) {
    const [rgba, setRgba] = React.useState({
        red: 255,
        green: 0,
        blue: 255,
        alpha: 100,
    })
    console.log(rgba)
    const styles = {
        blob: {
            borderRadius: '50%',
            width: '20rem',
            height: '20rem',
            backgroundColor: `rgba(${rgba.red}, ${rgba.green}, ${rgba.blue}, ${rgba.alpha / 100})`,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '1rem',
        },
        colorDescription: {
            fontSize: '24px',
        },
        container: {
            textAlign: 'center',
            height: '100%',
        }
    }

    return (
        <div style={styles.container}>
            <p style={styles.colorDescription}>{`rgba(${rgba.red}, ${rgba.green}, ${rgba.blue}, ${rgba.alpha / 100})`}</p>
            <div style={styles.blob}>
                {/* <img src="/prism.png" /> */}
            </div>
            <Slider id="red" label="Red" current={rgba.red} max={255} onChange={setRgba} currentState={rgba} />
            <Slider id="green" label="Green" current={rgba.green} max={255} onChange={setRgba} currentState={rgba} />
            <Slider id="blue" label="Blue" current={rgba.blue} max={255} onChange={setRgba} currentState={rgba} />
            <Slider id="alpha" label="Alpha" current={rgba.alpha} max={100} onChange={setRgba} currentState={rgba} />
        </div>
    )
}