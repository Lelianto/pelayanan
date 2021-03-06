import React from 'react';
import { useParams } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    mainImage: {
        width: '100%'
    },
    mainTitle: {
        fontSize: '72px',
        color: 'yellow',
        position: 'absolute',
        top: '0',
        right: '0',
        padding: '5rem 8rem 2rem 0rem',
        fontFamily: 'Mouse Memoirs'
    },
    mainTitle2: {
        fontSize: '72px',
        position: 'absolute',
        padding: '5rem 8rem 2rem 0rem',
        fontFamily: 'Mouse Memoirs',
        right: '3px',
        top: '3px',
        color: 'mintcream'
    },
    mainTitleSM: {
        fontSize: '20px',
        color: '#f6cb31f0',
        position: 'absolute',
        top: '0',
        right: '0',
        padding: '1rem 1rem 0rem 0rem',
        fontFamily: 'Mouse Memoirs'
    },
    mainTitleSM2: {
        fontSize: '20px',
        position: 'absolute',
        padding: '1rem 1rem 0rem 0rem',
        fontFamily: 'Mouse Memoirs',
        right: '3px',
        top: '3px',
        color: 'mintcream'
    },
    paddingZero: {
        padding: '0'
    },
    textControl: {
        textAlign: 'left',
        fontSize: '24px',
        fontFamily: 'Poppins'
    },
    handleMarginTop: {
        marginTop: '30px',
        lineHeight: '2rem'
    },
    handleMarginTop1: {
        marginTop: '30px',
        lineHeight: '2rem'
    },
    handleSubText: {
        marginTop: '30px'
    },
    backgroundSubText: {
        padding: '10px 50px'
    },
    imageWidth: {
        width: '50%'
    },
    imageWidthSm: {
        width: '80%'
    },
    textControlSm: {
        textAlign: 'left',
        fontSize: '16px',
        lineHeight: '2rem'
    },
    handleSurvey: {
        fontSize: '48px',
        fontWeight: '600',
        marginBottom: '10px'
    },
    handleBox: {
        background: '#f6cb31f0',
        padding: '10px',
        borderRadius: '25px'
    },
    quoteFont: {
        fontSize: '44px',
        color: '#f6cb31f0',
        fontStyle: 'italic',
        fontWeight: '700',
    },
    quoteFontM: {
        fontSize: '24px',
        fontStyle: 'italic',
        color: '#f6cb31f0',
        fontWeight: '700'
    },
    quoteFontB: {
        fontSize: '44px',
        fontStyle: 'italic',
        fontWeight: '700',
        color: 'black'
    },
    quoteFontMB: {
        fontSize: '24px',
        fontStyle: 'italic',
        color: 'black',
        fontWeight: '700'
    },
    buttonPrimary: {
        backgroundColor: '#f6cb31f0 !important',
        color: 'black !important',
        fontWeight: '700',
        fontFamily: 'Poppins',
        fontSize: '48px',
        padding: '0px 30px',
        borderRadius: '15px'
    },
    buttonPrimaryM: {
        backgroundColor: '#f6cb31f0 !important',
        color: 'black !important',
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: '30px',
        padding: '0px 30px',
        borderRadius: '15px'
    },
    handleLink: {
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'none'
        }
    },
    handleBackQuote: {
        position: 'absolute',
        bottom: '2px',
        right: '0',
        left: '-10px',
    }
})

const HomePage = (props) => {
    const classes = useStyles()
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const matchesMd = useMediaQuery(theme.breakpoints.up('md'));
    const classDouble = [classes.paddingZero, 'col-12'].join(' ')
    const classDouble1 = [classes.backgroundSubText, 'col-12'].join(' ')
    const subText1 = [classes.handleMarginTop, 'row'].join(' ')
    const subTextM = [classes.handleMarginTop1, 'row'].join(' ')

    let { id } = useParams();
    let link = 'https://m.me/'

    switch (id) {
        case '1':
            link = `${link}101758411513631` //sudahKutemukan
            break;
        case '2':
            link = `${link}105063457842541` //Mahasiswa mantul
            break;
        case '3':
            link = `${link}105083317893946` //living water
            break;
        case '4':
            link = `${link}journeytogether.cj` //Journey Together
            break;
        case '5':
            link = `${link}versi.terbaikku` //versi terbaikku
            break;
        case '6':
            link = `${link}RumahMahasiswa` //Rumah Mahasisiwa
            break;
        case '7':
            link = `${link}1pemimpinmasadepan` //Pemimpin masa depan
            break;
        case '8':
            link = `${link}101003554920761` //Go & Make Desciples
            break;
        case '9':
            link = `${link}105686511244584` //Harapan Hidup
            break;
        case '10':
            link = `${link}243841853374495` //Gaming
            break;
        case '11':
            link = 'https://www.instagram.com/direct/t/340282366841710300949128146074621209041' // Kasih Karunia (via Instagram)
            break;
        default:
            link = `${link}101758411513631` //sudahKutemukan
            break;
    }




    return (
        <React.Fragment>
            <div className='container-fluid'>
                <div className='row'>
                    <div className={classDouble}>
                        <img className={classes.mainImage} src="https://firebasestorage.googleapis.com/v0/b/service-app-f2330.appspot.com/o/bannerrrr%20landing%20page.png?alt=media&token=1af62077-1c99-4818-bcee-9ac9c496b1b3" alt="" />
                    </div>
                </div>
                <div className={subText1}>
                    <div className='col-12'>
                        {
                            matches ?
                                <div className='row'>
                                    <div className='col-3'>
                                        <div>
                                            <img className={classes.mainImage} src="https://firebasestorage.googleapis.com/v0/b/service-app-f2330.appspot.com/o/Confused.png?alt=media&token=7f4ab63f-c0a8-47f6-9d71-f3da9641df2b" alt="" />
                                        </div>
                                    </div>
                                    <div className='col-9'>
                                        <div className={classes.textControl}>
                                            <strong>
                                                Berat,&nbsp;
                                    </strong>
                                                menjadi kata yang tepat untuk tahun ini. Masalah pandemi yang berujung
                                                pada kesulitan ekonomi dan berubahnya “normal” yang biasa kita jalani
                                                memunculkan penyakit baru, yaitu penyakit hati.
                                        </div>
                                        <div className={[classes.textControl, classes.handleSubText].join(' ')}>
                                            Dilansir dari republika.co.id, studi terbaru oleh University College London (UCL),
                                            Imperial College dan University of Sussex mencatat, bahwa
                                            <div className="text-center mt-3">
                                                <div className={classes.handleSurvey}>
                                                    6 dari 10
                                                </div>
                                                anak muda memiliki <br />
                                                masalah&nbsp;
                                                <strong>
                                                    kesehatan mental. <br /> <br />
                                                </strong>
                                                antara lain :
                                                <ul>
                                                    <li>mudah marah (tanpa sebab yang jelas)</li>
                                                    <li> sering mengurung diri</li>
                                                    <li>merasa tertutup (bahkan dengan keluarga/kerabat dekat)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className='row mb-3'>
                                    <div className='col-12'>
                                        <div className={classes.textControlSm}>
                                            <strong>
                                                Berat,&nbsp;
                                            </strong>
                                                menjadi kata yang tepat untuk tahun ini. Masalah pandemi yang berujung
                                                pada kesulitan ekonomi dan berubahnya “normal” yang biasa kita jalani
                                                memunculkan penyakit baru, yaitu penyakit hati.
                                        </div>
                                    </div>

                                    <div className='col-12'>
                                        <div>
                                            <img className={classes.mainImage} src="https://firebasestorage.googleapis.com/v0/b/service-app-f2330.appspot.com/o/Confused.png?alt=media&token=7f4ab63f-c0a8-47f6-9d71-f3da9641df2b" alt="" />
                                        </div>
                                    </div>

                                    <div className='col-12'>
                                        <div className={[classes.textControlSm, classes.handleSubText].join(' ')}>
                                            Dilansir dari republika.co.id, studi terbaru oleh University College London (UCL),
                                            Imperial College dan University of Sussex mencatat, bahwa
                                            <div className="text-center mt-3">
                                                <div className={classes.handleSurvey}>
                                                    6 dari 10
                                                </div>
                                                anak muda memiliki <br />
                                                masalah&nbsp;
                                                <strong>
                                                    kesehatan mental. <br />
                                                </strong>
                                                antara lain :
                                                <ul>
                                                    <li>mudah marah (tanpa sebab yang jelas)</li>
                                                    <li>sering mengurung diri</li>
                                                    <li>merasa tertutup (bahkan dengan keluarga/kerabat dekat)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className={classDouble1}>
                        <div className={classes.handleBox}>
                            <strong className={matches ? classes.textControl : classes.textControlSm}>
                                Dalam keadaan ini, kita tahu bahwa harapan sesungguhnya hanya bisa kita temukan di dalam Tuhan saja.
                        </strong>
                        </div>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-12'>
                        <img className={matches ? classes.imageWidth : classes.imageWidthSm} src="https://firebasestorage.googleapis.com/v0/b/service-app-f2330.appspot.com/o/3704116-1-1024x683.jpg?alt=media&token=473354dd-80e1-4332-b372-65610ed77034" alt="" />
                    </div>
                </div>
                <div className={matches ? subText1 : subTextM}>
                    <div className='col-12'>
                        <div className={matches ? classes.textControl : classes.textControlSm}>
                            <div className='text-center'>
                                Kalau kamu ingin menemukan harapan di dalam Tuhan, kita dapat membicarakannya bersama.
                                Kami bersedia menjadi&nbsp;
                                <strong>
                                    teman perjalanan&nbsp;
                                </strong>
                                yang akan menemanimu untuk menemukan
                                harapan yang sejati di dalam Tuhan itu. Cerita dan informasi yang kamu bagikan akan dijaga keamanan dan
                                kerahasiaannya tanpa dibagikan kepada pihak lain.
                                <br />
                                <br />
                                <div className='mt-3'>
                                    {
                                        matchesMd ?
                                            <div>
                                                <strong className={matches ? classes.quoteFont : classes.quoteFontM}>
                                                    “Let your mess become message, your test become testimony”
                                        </strong>
                                            </div>
                                            :
                                            <span>

                                            </span>
                                    }
                                    <div className={matchesMd ? classes.handleBackQuote : ''}>
                                        <strong className={matches ? classes.quoteFontB : classes.quoteFontMB}>
                                            “Let your mess become message, your test become testimony”
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={subText1}>
                    <div className='col-12'>
                        <img className={matches ? classes.imageWidth : classes.imageWidthSm} src="https://firebasestorage.googleapis.com/v0/b/service-app-f2330.appspot.com/o/cerita%20landing%20page.png?alt=media&token=e33cec3c-2a8e-4076-ba11-e85cf3c2c753" alt="" />
                    </div>
                    <div className='col-12'>
                        <strong className={matches ? classes.textControl : classes.textControlSm}>
                            Lanjutkan percakapan dengan klik tombol
                        </strong>
                    </div>
                    <div className='col-12 mt-3 mb-5'>
                        <a href={link} className={classes.handleLink} rel="noopener noreferrer" target="_blank">
                            <Button variant="contained" color="primary" className={matches ? classes.buttonPrimary : classes.buttonPrimaryM} disableElevation>
                                Kirim Pesan
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}

export default HomePage;