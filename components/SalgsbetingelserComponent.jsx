import React from 'react'
import { makeStyles, Typography, Container, Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    mainContainer: {
       maxWidth: '60rem'
    },
    salgsContainer: {
        background: theme.palette.customWhite.white,
        width: '100vw'
    },
    header: {
        padding: '4rem',
        color: '#5b5858'

    },
    conditionHeader: {
       fontWeight: 600,
       color: '#5b5858'
    },
    paragraph: {
        marginLeft: '2.2rem',
        fontWeight: 300,
        marginBottom: '1.5rem',
        
    },
    ending: {
        color: '#5b5858',
        '&:first-child': {
            paddingTop: '3rem'
        },
        '&:last-child': {
            paddingBottom: '3rem'
        }
    }
}))

const SalgsbetingelserComponent = () => {
    const classes = useStyles()
    return (
        <div className={classes.salgsContainer}>
            <Container className={classes.mainContainer}>
                <Grid justify='center' container>
                    <Grid item>
                        <Typography className={classes.header} variant='h4'>Salgsbetingelser</Typography>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item>
                        <Typography className={classes.conditionHeader} variant='h6'><span style={{visibility: 'hidden'}}>0</span>1. Generelt</Typography>
                        <Typography className={classes.paragraph} variant='h6'>Salgsbetingelser gjelder for alle tilbud og salg, med mindre annet er skriftlig avtalt med kjøper.</Typography>
                        <Typography className={classes.conditionHeader} variant='h6'><span style={{visibility: 'hidden'}}>0</span>2. Priser/tilbud</Typography>
                        <Typography className={classes.paragraph} variant='h6'>Alle priser er oppgitt uten merverdigavgift, frakt og evt. spesialemballasje. Prisendringer som følge av endringer i valutekurser, offentlige toll og avgifter mv. som Kvarnstrands & Stridsbergs AS ikke kan påvirke skal komme i tillegg/fradrag til den avtalte pris.</Typography>
                        <Typography className={classes.conditionHeader} variant='h6'><span style={{visibility: 'hidden'}}>0</span>3. Levering</Typography>
                        <Typography className={classes.paragraph} variant='h6'>Alle varer leveres DDP Stange. Ved bruk av Stridsbergs egen servicebil beregnes frakt etter avstand og vekt og/eller etter avtale. Ved bruk av andre transportører blir kunden debitert til selvkost. For varer som ikke er lagervare er oppgitte leveringstider og betrakte som veiledende. Selger plikter å opplyse kjøper om endring i leveringstid så snart dette kommer til hans kunnskap. Overskrider av veiledende levering gir ingen rett til heving av kjøpet og det betales ingen form for erstatning.</Typography>
                        <Typography className={classes.conditionHeader} variant='h6'><span style={{visibility: 'hidden'}}>0</span>4. Reklamasjoner/undersøkelsesplikt</Typography>
                        <Typography className={classes.paragraph} variant='h6'>Kjøper plikter å kontrollere varene straks etter levering, og gi beskjed umiddelbart etter mottak dersom feil eller manger oppdages. Varer som er tatt i bruk eller som ikke kan framlegges for selger, erstattes ikke.</Typography>
                        <Typography className={classes.conditionHeader} variant='h6'><span style={{visibility: 'hidden'}}>0</span>5. Garanti og ansvar</Typography>
                        <Typography className={classes.paragraph} variant='h6'>Selger garanterer en feilfri, funksjonsdyktig vare i henhold til våre underleverandørers gjeldende spesifikasjoner. Selger skal uten kostnad for kjøper utbedre eventuelle mangler som følge av material- eller fabrikasjonsfeil. Kjøper plikter å gi selger nødvendig tid for å avhjelpe mangelen, samt å stille varen til rådighet for selger gjennom eventuelle demontering og transport til selgers verksted. Våre forpliktelser bortfaller hvis det pviselig er gjort inngrep i varen eller hvis mangelen er oppstått gjennom ukyndig montering eller bruk. Selger sitt ansvar overfor kjøper er begrenset til kjøpers dokumentbare direkte tap., og kan ikke overstige fakturert beløp som danner grunnlag for kravet. Selger er ikke ansvarlig for indirekte tap eller konsekvenstap (inkludert erstatning for tapt fortjeneste eller tapte inntekter, driftsavbrudd eller tap som følge av varens videre anvendelse) som oppstår etter leveransen.</Typography>
                        <Typography className={classes.conditionHeader} variant='h6'><span style={{visibility: 'hidden'}}>0</span>6. Fritaksgrunner (force majeure)</Typography>
                        <Typography className={classes.paragraph} variant='h6'>Følgende omstendigheter skal betraktes som fritakelsesgrunner dersom de hindrer avtalens oppfyllelse eller gjør oppfyllelsen urimelig tyngende: arbeidskonflikt, militær mobilisering, krig, brann, transportvanskeligheter, valutarestriksjoner og enhver annen omstendighet som partene ikke kan råde over, såfremt deres virkning på avtalens oppfyllelse ikke kunne forutsees ved avtalens inngåelse.</Typography>
                        <Typography className={classes.conditionHeader} variant='h6'><span style={{visibility: 'hidden'}}>0</span>7. Avbestilling</Typography>
                        <Typography className={classes.paragraph} variant='h6'>Kjøperen har kun rett til å avbestille dersom selgeren kan avbestille overfor sin leverandør. Ved avbestilling må kjøper dekke alle omkostninger ved avbestillingen. Lagerførte varer kan kun avbestilles uten omkostninger dersom dette kan skje uten ulempe eller tap for selger. </Typography>
                        <Typography className={classes.conditionHeader} variant='h6'><span style={{visibility: 'hidden'}}>0</span>8. Retur</Typography>
                        <Typography className={classes.paragraph} variant='h6'>Retur avtales på forhånd, og skjer for kjøpers egen regning og risiko. Varene skal returneres i ubeskadiget originalemballasje, vedlagt retrurmelding med opplysning om når varen er kjøpt, eventuelt kopi av faktura eller pakkseddel. det er en forutsetning for retur at varen ikke er tatt i bruk eller har vært montert, og at varen alders- og bruksmessig tilfredsstiller kvalitetskravene til tilsvarende ny vare. Spesialbetilte eller spesialfabrikerte  varer tas ikke i retur.</Typography>
                        <Typography className={classes.conditionHeader} variant='h6'><span style={{visibility: 'hidden'}}>0</span>9. Betaling</Typography>
                        <Typography className={classes.paragraph} variant='h6'>Pr. 15 dagers netto dersom ikke annen kredittid er avtalt. Ved forsinket betaling påløper renter etter de til enhver gjeldende bestemmelser om morarenter.</Typography>
                        <Typography className={classes.conditionHeader} variant='h6'>10. Eiendomsforbehold</Typography>
                        <Typography className={classes.paragraph} variant='h6'>De leverte varer forblir selgers eiendom inntil de er fullt betalt. Aksept eller annen tilsvarende oppgjørsform ansees ikke som betaling før full innfrielse foreligger.</Typography>
                        <Typography className={classes.conditionHeader} variant='h6'>11. Tvistespørsmål</Typography>
                        <Typography className={classes.paragraph} variant='h6'>I tvistespørsmål gjelder selgersverneting for begge parter.</Typography>
                        <hr/>
                        
                        <Typography className={classes.ending}>KvarnStrands & Stridsbergs AS</Typography>
                        <Typography className={classes.ending}>StensrudVeien 1, 2335 Stange</Typography>
                        <Typography className={classes.ending}>Org.nr. NO982734347MVA</Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default SalgsbetingelserComponent
