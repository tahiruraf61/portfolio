const Portfolio = () => {
    return(
        <>
        <div className='global-container' style={{backgroundColor: '#f8e60c'}}>
        <h1 style={{textAlign:'center'}}>My work</h1>
        <div className="img-container">
            <div>
                <img
                src={require('./assets/images/img1.png')}
                className='portfolio-img'
                alt='portfolio'
                />
            </div>

            <div>
                <img
                src={require('./assets/images/img2.png')}
                className='portfolio-img'
                alt='portfolio'
                />
            </div>
            <div>
                <img
                src={require('./assets/images/img3.png')}
                className='portfolio-img'
                alt='porfolio'
                />
            </div>
            <div>
                <img
                src={require('./assets/images/img4.png')}
                className='portfolio-img'
                alt='portfolio'
                />
            </div>
            <div>
                <img
                src={require('./assets/images/img5.png')}
                className='portfolio-img'
                alt='portfolio'
                />
            </div>
            <div>
                <img
                src={require('./assets/images/img6.png')}
                className='portfolio-img'
                alt='portfolio'
                />
            </div>


        </div>
        </div>
        </>
    )

}
export default Portfolio;