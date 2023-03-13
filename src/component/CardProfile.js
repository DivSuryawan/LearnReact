import accent from './../assets/accent.png';
import '../css/style.css';
import avatar from './../assets/avatar.png';
const CardProfile = () => {
    return (
      // 1. inline css
      <div
        style={{ 
         backgroundColor: "#00B6DF",
         width: "100vw",
         height: "100vh",
         backgroundImage: 'url(' +accent +')',
         backgroundPosition:'bottom right',
         backgroundRepeat:'no-repeat',
         display:'flex',
         justifyContent:'center',
         alignItems:'center',
         
      }}
      >
        {/* 2. css file */}
        <div className="card">
          <img src={avatar} />
          <div className="profile">Web Developer</div>
          <div className="name">Divta Suryawan</div>
          <div className="desc">
            Web developer generally have nothing to do with creating content for
            their projects. Even so, the look of a site can be incomplete if no
            words are included. Web designers need to find ways to
          </div>
          <button className="btn">Contact ME</button>
        </div>
      </div>
    );
}
export default CardProfile;