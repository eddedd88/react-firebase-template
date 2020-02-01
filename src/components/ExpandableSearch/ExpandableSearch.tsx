import React, { ChangeEvent, useState, useRef } from 'react'
import Paper from '@material-ui/core/Paper'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import Toolbar from '@material-ui/core/Toolbar'
import ClearIcon from '@material-ui/icons/Clear'
import Transition, { TransitionStatus } from 'react-transition-group/Transition'

const transitionTimeout: number = 100
const defaultStyle = {
  transition: `opacity ${transitionTimeout}ms linear`,
  opacity: 0,
  width: '100%',
  position: 'absolute',
  left: 0,
  overflow: 'hidden',
  pointerEvents: 'none',
  zIndex: 1
}

const transitionStyles: { [key in TransitionStatus]?: any } = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1,
    pointerEvents: 'auto'
  }
}

type Props = {
  placeholder: string
  onChangeValue: (value: string) => void
}

const ExpandableSearch = (props: Props) => {
  const [value, setValue] = useState<string>('')
  const [searchModeOn, setSearchModeOn] = useState<boolean>(false)

  const searchInput = useRef<HTMLInputElement>(null)

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue: string = e.currentTarget.value
    setValue(newValue)
    props.onChangeValue(newValue)
  }

  const toggleSearchMode = () => {
    const newSearchModeOn: boolean = !searchModeOn
    setValue('')
    setSearchModeOn(newSearchModeOn)

    if (newSearchModeOn && searchInput.current) {
      searchInput.current.focus()
    } else {
      props.onChangeValue('')
    }
  }

  const handleClickClear = () => {
    setValue('')
    props.onChangeValue('')
    if (searchInput.current) {
      searchInput.current.focus()
    }
  }

  return (
    <>
      <IconButton color='inherit' onClick={toggleSearchMode}>
        <SearchIcon />
      </IconButton>

      <Transition in={searchModeOn} timeout={transitionTimeout}>
        {(transitionState: TransitionStatus) => (
          <Paper
            square
            elevation={1}
            color='inherit'
            style={{
              ...defaultStyle,
              ...transitionStyles[transitionState]
            }}
          >
            <Toolbar disableGutters>
              <IconButton onClick={toggleSearchMode}>
                <ArrowBackIcon />
              </IconButton>
              <Input
                type='search'
                placeholder={props.placeholder}
                fullWidth
                disableUnderline
                value={value}
                onChange={handleValueChange}
                inputRef={searchInput}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='Clear search query'
                      onClick={handleClickClear}
                    >
                      <ClearIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Toolbar>
          </Paper>
        )}
      </Transition>
    </>
  )
}

export default ExpandableSearch
