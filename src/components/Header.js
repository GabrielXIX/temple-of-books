import logo from '../logo_tecnm_itt.jpg';

export default function Header() {
    return (
        <div style={{padding: '1rem', textAlign: 'center'}}>
            <img style={{height: '100px'}} src={logo} alt='Logo TecNM ITT' />
        </div>
    )
}
