export default ({userName, imageSrc, userBio, nativeLanguage, learningLanguage}) => (
    <div className="card">
        <img scr={imageSrc} alt="userImage" className="card-image"/>
        <div className="card-content">
            <h2>{Name}</h2>
            <p>{userBio}</p>
            <div className="card-content-languages">
                <div className="card-content-languages-native">
                    <h3>Native</h3>
                    <h4>{nativeLanguage}</h4>
                </div>
                <div className="card-content-languages">
                    <h3>learning</h3>
                    <h4>{learningLanguage}</h4>        
                </div>
            </div>
        </div>
    </div>
)