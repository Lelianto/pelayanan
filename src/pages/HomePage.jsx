import React from 'react';
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
    mainTitleSM: {
        fontSize: '20px',
        color: 'yellow',
        position: 'absolute',
        top: '0',
        right: '0',
        padding: '1rem 1rem 0rem 0rem',
        fontFamily: 'Mouse Memoirs'
    },
    paddingZero: {
        padding: '0'
    },
    textControl: {
        textAlign: 'left',
        fontSize: '24px'
    },
    handleMarginTop: {
        marginTop: '30px',
        lineHeight: '3rem'
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
        background: 'yellow',
        padding: '10px',
        borderRadius: '25px'
    },
    quoteFont: {
        fontSize: '48px',
        fontStyle: 'italic',
        fontWeight: '500'
    },
    quoteFontM: {
        fontSize: '24px',
        fontStyle: 'italic',
        fontWeight: '500'
    },
    buttonPrimary: {
        backgroundColor: 'yellow !important',
        color: 'black !important',
        fontWeight: '700',
        fontSize: '48px',
        padding: '0px 30px',
        borderRadius: '15px'
    },
    buttonPrimaryM: {
        backgroundColor: 'yellow !important',
        color: 'black !important',
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
    }
})

const HomePage = (props) => {
    const classes = useStyles()
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const classDouble = [classes.paddingZero, 'col-12'].join(' ')
    const classDouble1 = [classes.backgroundSubText, 'col-12'].join(' ')
    const subText1 = [classes.handleMarginTop, 'row'].join(' ')
    const subTextM = [classes.handleMarginTop1, 'row'].join(' ')
    let link = 'https://m.me/101758411513631'
    return (
        <React.Fragment>
            <div className='container-fluid'>
                <div className='row'>
                    <div className={classDouble}>
                        <img className={classes.mainImage} src="https://firebasestorage.googleapis.com/v0/b/service-app-f2330.appspot.com/o/1600257021566.jpg?alt=media&token=fe0ac9f3-b2ea-4e7f-b69a-333553a9d41b" alt="" />
                        <div className={matches ? classes.mainTitle : classes.mainTitleSM}>
                            <div>
                                Finding Hope in Jesus
                            </div>
                            <div>
                                Inspiring People
                            </div>
                        </div>
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
                                            <div className="text-center">
                                                <div className={classes.handleSurvey}>
                                                    6 dari 10
                                                </div>
                                                anak muda memiliki <br />
                                                masalah&nbsp;
                                                <strong>
                                                    kesehatan mental.
                                                </strong>
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
                                            <div className="text-center">
                                                <div className={classes.handleSurvey}>
                                                    6 dari 10
                                                </div>
                                                anak muda memiliki <br />
                                                masalah&nbsp;
                                                <strong>
                                                    kesehatan mental.
                                                </strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
                <div className='row mt-5'>
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
                                <strong className={matches ? classes.quoteFont : classes.quoteFontM}>
                                    “Let your mess become message, your test become testimony”
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={subText1}>
                    <div className='col-12'>
                        <img className={matches ? classes.imageWidth : classes.imageWidthSm} src="https://firebasestorage.googleapis.com/v0/b/service-app-f2330.appspot.com/o/slmcampaign1.png?alt=media&token=b40f3e49-77c9-458c-8939-331c332894ea" alt="" />
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