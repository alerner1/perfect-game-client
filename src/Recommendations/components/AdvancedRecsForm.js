import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class AdvancedRecsForm extends React.Component {
  state = {
    formData: {
      platforms: [],
      genres: [],
      releaseDate: [1900, 2020],
      gameModes: [],
      multiplayerModes: [],
      onlyOwned: false
    },
    allPlatforms: false
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.formData)
  }

  handleChange = event => {
    if (event.target.name === 'platform') {
      if (!this.state.formData.platforms.includes(event.target.value)) {
        console.log('new')
        this.setState(prev => ({
          ...prev,
          formData: {
            ...prev.formData,
            platforms: [...prev.formData.platforms, event.target.value]
          }
        }))
      } else {
        this.setState(prev => ({
          ...prev,
          formData: {
            ...prev.formData,
            platforms: prev.formData.platforms.filter(platform => { return platform !== event.target.value })
          }
        }))
      }
    } else if (event.target.name === 'all_platforms') {
      if (this.state.allPlatforms === false) {
        this.setState(prev => ({
          ...prev,
          formData: {
            ...prev.formData,
            platforms: [...default_platforms, ...platform_names]
          },
          allPlatforms: true
        }))
      } else {
        this.setState(prev => ({
          ...prev,
          formData: {
            ...prev.formData,
            platforms: []
          },
          allPlatforms: false
        }))
      }
    } else if (event.target.name === 'start-year') {
      this.setState(prev => ({
        ...prev,
        formData: {
          ...prev.formData,
          releaseDate: [event.target.value, prev.formData.releaseDate[1]]
        }
      }))
    } else if (event.target.name === 'end-year') {
      this.setState(prev => ({
        ...prev,
        formData: {
          ...prev.formData,
          releaseDate: [prev.formData.releaseDate[0], event.target.value]
        }
      }))
    } else if (event.target.name === 'genre') {
      if (!this.state.formData.genres.includes(event.target.value)) {
        console.log('new')
        this.setState(prev => ({
          ...prev,
          formData: {
            ...prev.formData,
            genres: [...prev.formData.genres, event.target.value]
          }
        }))
      } else {
        this.setState(prev => ({
          ...prev,
          formData: {
            ...prev.formData,
            genres: prev.formData.genres.filter(genre => { return genre !== event.target.value })
          }
        }))
      }
    } else if (event.target.name === 'game-mode') {
      if (!this.state.formData.gameModes.includes(event.target.value)) {
        console.log('new')
        this.setState(prev => ({
          ...prev,
          formData: {
            ...prev.formData,
            gameModes: [...prev.formData.gameModes, event.target.value]
          }
        }))
      } else {
        this.setState(prev => ({
          ...prev,
          formData: {
            ...prev.formData,
            gameModes: prev.formData.gameModes.filter(mode => { return mode !== event.target.value })
          }
        }))
      }
    } else if (event.target.name === 'multiplayer-mode') {
      if (!this.state.formData.multiplayerModes.includes(event.target.value)) {
        console.log('new')
        this.setState(prev => ({
          ...prev,
          formData: {
            ...prev.formData,
            multiplayerModes: [...prev.formData.multiplayerModes, event.target.value]
          }
        }))
      } else {
        this.setState(prev => ({
          ...prev,
          formData: {
            ...prev.formData,
            multiplayerModes: prev.formData.multiplayerModes.filter(mode => { return mode !== event.target.value })
          }
        }))
      }
    } else if (event.target.name === 'only-owned') {
      this.setState(prev => ({
        ...prev,
        formData: {
          ...prev.formData,
          onlyOwned: !prev.formData.onlyOwned
        }
      }))
    }
  }

  mapGenres = () => {
    return genre_names.sort().map(genre => <Form.Check inline label={genre} onClick={this.handleChange} name="genre" type='checkbox' id={genre} value={genre} />)
  }

  mapGameModes = () => {
    return game_modes.map(mode => <Form.Check inline label={mode} onClick={this.handleChange} name="game-mode" type='checkbox' id={mode} value={mode} />)
  }

  mapMultiplayerModes = () => {
    return (
      <>
        <Form.Check inline label='Campaign Co-op' onClick={this.handleChange} name="multiplayer-mode" type='checkbox' id='campaigncoop' value='campaigncoop' />
        <Form.Check inline label='Drop-in' onClick={this.handleChange} name="multiplayer-mode" type='checkbox' id='dropin' value='dropin' />
        <Form.Check inline label='Local Co-op' onClick={this.handleChange} name="multiplayer-mode" type='checkbox' id='lancoop' value='lancoop' />
        <Form.Check inline label='Offline Co-op' onClick={this.handleChange} name="multiplayer-mode" type='checkbox' id='offlinecoop' value='offlinecoop' />
        <Form.Check inline label='Online Co-op' onClick={this.handleChange} name="multiplayer-mode" type='checkbox' id='onlinecoop' value='onlinecoop' />
        <Form.Check inline label='Split Screen' onClick={this.handleChange} name="multiplayer-mode" type='checkbox' id='splitscreen' value='splitscreen' />
        <Form.Check inline label='Split Screen Online' onClick={this.handleChange} name="multiplayer-mode" type='checkbox' id='splitscreenonline' value='splitscreenonline' />
      </>
    )
  }

  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Label>Platforms: </Form.Label>
          <Form.Group>
            {this.state.allPlatforms ?
              <>
                <Form.Check disabled inline label={default_platforms[0]} onClick={this.handleChange} checked={true} name="platform" type='checkbox' id={`inline-checkbox-${default_platforms[0]}`} value={default_platforms[0]} />
                <Form.Check disabled inline label={default_platforms[1]} onClick={this.handleChange} checked={true} name="platform" type='checkbox' id={`inline-checkbox-${default_platforms[1]}`} value={default_platforms[1]} />
                <Form.Check disabled inline label={default_platforms[2]} onClick={this.handleChange} checked={true} name="platform" type='checkbox' id={`inline-checkbox-${default_platforms[2]}`} value={default_platforms[2]} />
                <Form.Check disabled inline label={default_platforms[3]} onClick={this.handleChange} checked={true} name="platform" type='checkbox' id={`inline-checkbox-${default_platforms[3]}`} value={default_platforms[3]} />
              </>
              :
              <>
                <Form.Check inline label={default_platforms[0]} onClick={this.handleChange} name="platform" type='checkbox' id={`inline-checkbox-${default_platforms[0]}`} value={default_platforms[0]} />
                <Form.Check inline label={default_platforms[1]} onClick={this.handleChange} name="platform" type='checkbox' id={`inline-checkbox-${default_platforms[1]}`} value={default_platforms[1]} />
                <Form.Check inline label={default_platforms[2]} onClick={this.handleChange} name="platform" type='checkbox' id={`inline-checkbox-${default_platforms[2]}`} value={default_platforms[2]} />
                <Form.Check inline label={default_platforms[3]} onClick={this.handleChange} name="platform" type='checkbox' id={`inline-checkbox-${default_platforms[3]}`} value={default_platforms[3]} />
              </>
            }
            <Form.Check inline label='All Platforms' onClick={this.handleChange} name="all_platforms" type='checkbox' id={`inline-checkbox-all_platforms`} />
          </Form.Group>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Year released:
          </Form.Label>
          <Form.Row>
            <Col xs={1}>
              <Form.Control name="start-year" onChange={this.handleChange} type="number" value={this.state.formData.releaseDate[0]} placeholder="Earliest year" />
            </Col>
            <Col xs={1} className="text-center">
              &#8212;
                </Col>
            <Col xs={1}>
              <Form.Control name="end-year" onChange={this.handleChange} type="number" value={this.state.formData.releaseDate[1]} placeholder="Latest year" />
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group>
          <Form.Label>Genres: </Form.Label>
          <Form.Group>
            {this.mapGenres()}
          </Form.Group>
        </Form.Group>
        <Form.Group>
          <Form.Label>Game modes: </Form.Label>
          <Form.Group>
            {this.mapGameModes()}
          </Form.Group>
        </Form.Group>
        {
          this.state.formData.gameModes.includes("Multiplayer") || this.state.formData.gameModes.includes("Co-operative") ?
            <>
              <Form.Group>
                <Form.Label>
                  Multiplayer modes:
                  </Form.Label>
                <Form.Group>
                  {this.mapMultiplayerModes()}
                </Form.Group>
              </Form.Group>
            </>
            :
            null
        }
        <Form.Group>
          <Form.Label>
            Ownership:
          </Form.Label>
          <Form.Group>
            <Form.Check label='only include games you already own' onChange={this.handleChange} name="only-owned" type="checkbox" id="only-owned" checked={this.state.formData.onlyOwned} />
          </Form.Group>
        </Form.Group>
        <Button onClick={this.handleSubmit} block type="submit">Submit</Button>
      </Form>
    )
  }
}

export default AdvancedRecsForm;

const default_platforms = ['PC (Microsoft Windows)', 'Nintendo Switch', 'PlayStation 4', 'Xbox One']

const platforms = [{ "id": 158, "name": "Commodore CDTV" }, { "id": 339, "name": "Sega Pico" }, { "id": 8, "name": "PlayStation 2" }, { "id": 39, "name": "iOS" }, { "id": 94, "name": "Commodore Plus/4" }, { "id": 144, "name": "AY-3-8710" }, { "id": 88, "name": "Odyssey" }, { "id": 90, "name": "Commodore PET" }, { "id": 237, "name": "Sol-20" }, { "id": 35, "name": "Sega Game Gear" }, { "id": 44, "name": "Tapwave Zodiac" }, { "id": 68, "name": "ColecoVision" }, { "id": 123, "name": "WonderSwan Color" }, { "id": 129, "name": "Texas Instruments TI-99" }, { "id": 133, "name": "Philips Videopac G7000" }, { "id": 134, "name": "Acorn Electron" }, { "id": 136, "name": "Neo Geo CD" }, { "id": 135, "name": "Hyper Neo Geo 64" }, { "id": 156, "name": "Thomson MO5" }, { "id": 160, "name": "Nintendo eShop" }, { "id": 165, "name": "PlayStation VR" }, { "id": 163, "name": "SteamVR" }, { "id": 142, "name": "PC-50X Family" }, { "id": 148, "name": "AY-3-8607" }, { "id": 146, "name": "AY-3-8605" }, { "id": 147, "name": "AY-3-8606" }, { "id": 149, "name": "PC-98" }, { "id": 25, "name": "Amstrad CPC" }, { "id": 51, "name": "Family Computer Disk System" }, { "id": 62, "name": "Atari Jaguar" }, { "id": 87, "name": "Virtual Boy" }, { "id": 89, "name": "Microvision" }, { "id": 13, "name": "PC DOS" }, { "id": 23, "name": "Dreamcast" }, { "id": 36, "name": "Xbox Live Arcade" }, { "id": 45, "name": "PlayStation Network" }, { "id": 65, "name": "Atari 8-bit" }, { "id": 70, "name": "Vectrex" }, { "id": 85, "name": "Donner Model 30" }, { "id": 97, "name": "PDP-8" }, { "id": 98, "name": "DEC GT40" }, { "id": 112, "name": "Microcomputer" }, { "id": 101, "name": "Ferranti Nimrod Computer" }, { "id": 115, "name": "Apple IIGS" }, { "id": 119, "name": "Neo Geo Pocket" }, { "id": 124, "name": "SwanCrystal" }, { "id": 127, "name": "Fairchild Channel F" }, { "id": 125, "name": "PC-8801" }, { "id": 128, "name": "PC Engine SuperGrafx" }, { "id": 126, "name": "TRS-80" }, { "id": 132, "name": "Amazon Fire TV" }, { "id": 138, "name": "VC 4000" }, { "id": 139, "name": "1292 Advanced Programmable Video System" }, { "id": 155, "name": "Tatung Einstein" }, { "id": 159, "name": "Nintendo DSi" }, { "id": 150, "name": "Turbografx-16/PC Engine CD" }, { "id": 153, "name": "Dragon 32/64" }, { "id": 154, "name": "Amstrad PCW" }, { "id": 11, "name": "Xbox" }, { "id": 108, "name": "PDP-11" }, { "id": 47, "name": "Virtual Console (Nintendo)" }, { "id": 50, "name": "3DO Interactive Multiplayer" }, { "id": 53, "name": "MSX2" }, { "id": 60, "name": "Atari 7800" }, { "id": 78, "name": "Sega CD" }, { "id": 24, "name": "Game Boy Advance" }, { "id": 30, "name": "Sega 32X" }, { "id": 140, "name": "AY-3-8500" }, { "id": 143, "name": "AY-3-8760" }, { "id": 145, "name": "AY-3-8603" }, { "id": 4, "name": "Nintendo 64" }, { "id": 18, "name": "Nintendo Entertainment System (NES)" }, { "id": 16, "name": "Amiga" }, { "id": 22, "name": "Game Boy Color" }, { "id": 41, "name": "Wii U" }, { "id": 77, "name": "Sharp X1" }, { "id": 82, "name": "Web browser" }, { "id": 109, "name": "CDC Cyber 70" }, { "id": 113, "name": "OnLive Game System" }, { "id": 116, "name": "Acorn Archimedes" }, { "id": 114, "name": "Amiga CD32" }, { "id": 117, "name": "Philips CD-i" }, { "id": 121, "name": "Sharp X68000" }, { "id": 122, "name": "Nuon" }, { "id": 120, "name": "Neo Geo Pocket Color" }, { "id": 141, "name": "AY-3-8610" }, { "id": 37, "name": "Nintendo 3DS" }, { "id": 29, "name": "Sega Mega Drive/Genesis" }, { "id": 64, "name": "Sega Master System" }, { "id": 38, "name": "PlayStation Portable" }, { "id": 86, "name": "TurboGrafx-16/PC Engine" }, { "id": 19, "name": "Super Nintendo Entertainment System (SNES)" }, { "id": 306, "name": "Satellaview" }, { "id": 307, "name": "Game & Watch" }, { "id": 308, "name": "Playdia" }, { "id": 15, "name": "Commodore C64/128" }, { "id": 14, "name": "Mac" }, { "id": 20, "name": "Nintendo DS" }, { "id": 21, "name": "Nintendo GameCube" }, { "id": 32, "name": "Sega Saturn" }, { "id": 34, "name": "Android" }, { "id": 42, "name": "N-Gage" }, { "id": 66, "name": "Atari 5200" }, { "id": 67, "name": "Intellivision" }, { "id": 73, "name": "BlackBerry OS" }, { "id": 93, "name": "Commodore 16" }, { "id": 111, "name": "Imlac PDS-1" }, { "id": 118, "name": "FM Towns" }, { "id": 131, "name": "Nintendo PlayStation" }, { "id": 157, "name": "NEC PC-6000 Series" }, { "id": 162, "name": "Oculus VR" }, { "id": 152, "name": "FM-7" }, { "id": 9, "name": "PlayStation 3" }, { "id": 63, "name": "Atari ST/STE" }, { "id": 46, "name": "PlayStation Vita" }, { "id": 49, "name": "Xbox One" }, { "id": 61, "name": "Atari Lynx" }, { "id": 12, "name": "Xbox 360" }, { "id": 167, "name": "PlayStation 5" }, { "id": 58, "name": "Super Famicom" }, { "id": 92, "name": "SteamOS" }, { "id": 91, "name": "Bally Astrocade" }, { "id": 96, "name": "PDP-10" }, { "id": 55, "name": "Mobile" }, { "id": 52, "name": "Arcade" }, { "id": 56, "name": "WiiWare" }, { "id": 137, "name": "New Nintendo 3DS" }, { "id": 5, "name": "Wii" }, { "id": 7, "name": "PlayStation" }, { "id": 33, "name": "Game Boy" }, { "id": 69, "name": "BBC Microcomputer System" }, { "id": 71, "name": "Commodore VIC-20" }, { "id": 75, "name": "Apple II" }, { "id": 74, "name": "Windows Phone" }, { "id": 80, "name": "Neo Geo AES" }, { "id": 84, "name": "SG-1000" }, { "id": 161, "name": "Windows Mixed Reality" }, { "id": 79, "name": "Neo Geo MVS" }, { "id": 57, "name": "WonderSwan" }, { "id": 169, "name": "Xbox Series" }, { "id": 3, "name": "Linux" }, { "id": 72, "name": "Ouya" }, { "id": 95, "name": "PDP-1" }, { "id": 151, "name": "TRS-80 Color Computer" }, { "id": 99, "name": "Family Computer (FAMICOM)" }, { "id": 100, "name": "Analogue electronics" }, { "id": 166, "name": "Pokémon mini" }, { "id": 102, "name": "EDSAC" }, { "id": 170, "name": "Google Stadia" }, { "id": 104, "name": "HP 2100" }, { "id": 236, "name": "Exidy Sorcerer" }, { "id": 103, "name": "PDP-7" }, { "id": 238, "name": "DVD Player" }, { "id": 105, "name": "HP 3000" }, { "id": 106, "name": "SDS Sigma 7" }, { "id": 203, "name": "Stadia" }, { "id": 164, "name": "Daydream" }, { "id": 107, "name": "Call-A-Computer time-shared mainframe computer system" }, { "id": 240, "name": "Zeebo" }, { "id": 110, "name": "PLATO" }, { "id": 239, "name": "Blu-ray Player" }, { "id": 26, "name": "ZX Spectrum" }, { "id": 274, "name": "PC-FX" }, { "id": 27, "name": "MSX" }, { "id": 309, "name": "Evercade" }, { "id": 59, "name": "Atari 2600" }];

const platform_names = platforms.map(platform => { return platform.name });

const genres = [{ "id": 4, "name": "Fighting" }, { "id": 5, "name": "Shooter" }, { "id": 7, "name": "Music" }, { "id": 8, "name": "Platform" }, { "id": 9, "name": "Puzzle" }, { "id": 10, "name": "Racing" }, { "id": 11, "name": "Real Time Strategy (RTS)" }, { "id": 12, "name": "Role-playing (RPG)" }, { "id": 13, "name": "Simulator" }, { "id": 14, "name": "Sport" }, { "id": 15, "name": "Strategy" }, { "id": 16, "name": "Turn-based strategy (TBS)" }, { "id": 24, "name": "Tactical" }, { "id": 26, "name": "Quiz/Trivia" }, { "id": 25, "name": "Hack and slash/Beat 'em up" }, { "id": 30, "name": "Pinball" }, { "id": 31, "name": "Adventure" }, { "id": 33, "name": "Arcade" }, { "id": 34, "name": "Visual Novel" }, { "id": 32, "name": "Indie" }, { "id": 35, "name": "Card & Board Game" }, { "id": 36, "name": "MOBA" }, { "id": 2, "name": "Point-and-click" }];

const genre_names = genres.map(genre => { return genre.name });

const multiplayer_modes = ["campaigncoop", "dropin", "lancoop", "offlinecoop", "onlinecoop", "splitscreen", "splitscreenonline"]

const game_modes = ["Single Player", "Multiplayer", "Battle Royale", "Co-operative", "Massively Multiplayer Online (MMO)"]