import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    mainImage: {
        width: '100%'
    },
    mainTitle: {
        fontSize: '54px',
        color: 'yellow',
        position: 'absolute',
        top: '0',
        right: '0',
        padding: '2rem'
    },
    mainTitleSM: {
        fontSize: '16px',
        color: 'yellow',
        position: 'absolute',
        top: '0',
        right: '0',
        padding: '2rem'
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
        background: 'yellow',
        padding: '50px 0px'
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
})

const HomePage = (props) => {
    const classes = useStyles()
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const classDouble = [classes.paddingZero, 'col-12'].join(' ')
    const classDouble1 = [classes.backgroundSubText, 'col-12'].join(' ')
    const subText1 = [classes.handleMarginTop, 'row'].join(' ')
    const subTextM = [classes.handleMarginTop1, 'row'].join(' ')
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
                                                Berat, menjadi kata yang tepat untuk tahun ini. Masalah pandemi yang berujung
                                                pada kesulitan ekonomi dan berubahnya “normal” yang biasa kita jalani
                                                memunculkan penyakit baru, yaitu penyakit hati.
                                    </strong>
                                        </div>
                                        <div className={[classes.textControl, classes.handleSubText].join(' ')}>
                                            <strong>
                                                Dilansir dari republika.co.id, studi terbaru oleh University College London (UCL),
                                                Imperial College dan University of Sussex mencatat, bahwa dari 10 anak muda,
                                                6 diantaranya memiliki masalah kesehatan mental.
                                    </strong>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className='row mb-3'>
                                    <div className='col-12'>
                                        <div className={classes.textControlSm}>
                                            <strong>
                                                Berat, menjadi kata yang tepat untuk tahun ini. Masalah pandemi yang berujung
                                                pada kesulitan ekonomi dan berubahnya “normal” yang biasa kita jalani
                                                memunculkan penyakit baru, yaitu penyakit hati.
                                            </strong>
                                        </div>
                                    </div>

                                    <div className='col-12'>
                                        <div>
                                            <img className={classes.mainImage} src="https://firebasestorage.googleapis.com/v0/b/service-app-f2330.appspot.com/o/Confused.png?alt=media&token=7f4ab63f-c0a8-47f6-9d71-f3da9641df2b" alt="" />
                                        </div>
                                    </div>

                                    <div className='col-12'>
                                        <div className={[classes.textControlSm, classes.handleSubText].join(' ')}>
                                            <strong>
                                                Dilansir dari republika.co.id, studi terbaru oleh University College London (UCL),
                                                Imperial College dan University of Sussex mencatat, bahwa dari 10 anak muda,
                                                6 diantaranya memiliki masalah kesehatan mental.
                                            </strong>
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className={classDouble1}>
                        <strong className={matches ? classes.textControl : classes.textControlSm}>
                            Dalam keadaan ini, kita tahu bahwa harapan sesungguhnya hanya bisa kita temukan di dalam Tuhan saja.
                        </strong>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-12'>
                        <img className={matches ? classes.imageWidth : classes.imageWidthSm} src="https://firebasestorage.googleapis.com/v0/b/service-app-f2330.appspot.com/o/download.png?alt=media&token=9366da78-5905-4e11-928f-d632463b76dc" alt="" />
                    </div>
                </div>
                <div className={matches ? subText1 : subTextM}>
                    <div className='col-12'>
                        <strong className={matches ? classes.textControl : classes.textControlSm}>
                            Kalau kamu ingin menemukan harapan di dalam Tuhan, kita dapat membicarakannya bersama.
                            Kami bersedia menjadi teman perjalanan yang akan menemanimu untuk menemukan
                            harapan yang sejati di dalam Tuhan itu. Cerita dan informasi yang kamu bagikan akan dijaga keamanan dan
                            kerahasiaannya tanpa dibagikan kepada pihak lain.
                            <br />
                            <br />
                            “ Let Your Mess become Message, Your Test become Testimony”
                        </strong>
                    </div>
                </div>
                <div className={subText1}>
                    <div className='col-12'>
                        <img className={matches ? classes.imageWidth : classes.imageWidthSm} src="https://firebasestorage.googleapis.com/v0/b/service-app-f2330.appspot.com/o/COVID19_SM-Kit_Connect-Feed%20(1).png?alt=media&token=dc7c7fca-411c-4680-bcb4-a200e6494706" alt="" />
                    </div>
                    <div className='col-12'>
                        <strong className={matches ? classes.textControl : classes.textControlSm}>
                            Lanjutkan percakapan dengan klik tombol
                        </strong>
                    </div>
                    <div className='col-12 mt-3 mb-5'>
                        <Button variant="contained" color="primary" disableElevation>
                            Kirim Pesan
                        </Button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}

export default HomePage;