import {useState, useEffect, useLayoutEffect} from "react";

const UPDATE_INTERVAL = 1000;
const KEY_LOCALE = 'KEY_LOCALE'

const DEFAULT_LOCALE = 'en-US'

enum Locale {
  US = 'en-US',
  JP = 'ja-JP',
}

const getLocaleFromString = (text: string) => {
  switch (text) {
    case Locale.US:
      return Locale.US
    case Locale.JP:
      return Locale.JP
    default:
      return Locale.US
  }
}


export const Clock = () => {
  const [timestamp, setTimestamp] = useState(new Date())

  // is it possible to initialize state from localStorage?
  const [locale, setLocale] = useState(localStorage.getItem(KEY_LOCALE))

  // Effect for setting timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimestamp(new Date())
      console.log("Timestamp updated")
    }, UPDATE_INTERVAL)

    console.log("Timer initialized")

    return () => {
      clearInterval(timer)
    }
  }, [])
  // this effect is called only when initial rendering this component

  // Effect for getting local setting
  useLayoutEffect(() => {
    const savedLocale = localStorage.getItem(KEY_LOCALE)
    if (savedLocale) {
      let locale_enum = getLocaleFromString(savedLocale)
      setLocale(locale_enum)
      console.log(`Locale acquired: ${savedLocale}`)
      console.log(`Locale Enum: ${locale_enum}`)
    }
  }, [])
  // this effect is called only when initial rendering this component

  // Effect for saving local setting when locale is changed
  useEffect(() => {
    if (locale) {
      localStorage.setItem(KEY_LOCALE, locale)
      console.log(`Locale saved: ${locale}`)
    }
  }, [locale])
  // this effect is called every time locale is changed

  return (
    <div style={{padding: '0px 10px'}}>
      <h1>Clock</h1>
      <p>
        <span id="current-time-label">Current time: </span>
        <span>{timestamp.toLocaleString(locale ?? DEFAULT_LOCALE)}</span>
        <select
          value={locale ?? DEFAULT_LOCALE}
          onChange={(e) => setLocale(getLocaleFromString(e.target.value))}>
          <option value={Locale.US}>{Locale.US}</option>
          <option value={Locale.JP}>{Locale.JP}</option>
        </select>
      </p>
    </div>
  )
}
