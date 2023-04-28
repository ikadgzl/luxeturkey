import BackgroundImage from '/assets/bg.png';

function App() {
  return (
    <div
      className='app'
      style={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: 'Misspiece',
      }}
    >
      <h1
        className='header'
        style={{
          marginTop: 'auto',
          fontWeight: 400,
          color: 'rgba(135, 135, 135, 1)',
          fontSize: 96,
        }}
      >
        Luxe Turkiye
      </h1>
      <h2
        style={{
          fontWeight: 400,
          color: 'white',
          fontSize: 44,
        }}
      >
        We're currently working to enhance your online experience.
      </h2>
      <h3
        style={{
          marginTop: 48,
          fontWeight: 400,
          color: '#CC0000',
          fontSize: 36,
        }}
      >
        Coming Soon with New & Exciting Changes
      </h3>
      <p
        style={{
          marginTop: 'auto',
          marginBottom: 32,
          fontSize: 36,
          color: 'white',
        }}
      >
        Info@LuxeTurkiye.com
      </p>
    </div>
  );
}

export default App;
