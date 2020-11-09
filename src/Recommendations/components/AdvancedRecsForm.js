import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { getAdvancedRecommendations } from '../../redux/actions/recommendedGamesActions';

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
    this.props.getAdvancedRecommendations(this.state.formData);
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
                <Form.Check disabled inline label='Nintendo Switch'onClick={this.handleChange} checked={true} name="platform" type='checkbox' id={`inline-checkbox-${default_platforms[1]}`} value={default_platforms[1]} />
                <Form.Check disabled inline label='PlayStation 4' onClick={this.handleChange} checked={true} name="platform" type='checkbox' id={`inline-checkbox-${default_platforms[2]}`} value={default_platforms[2]} />
                <Form.Check disabled inline label='Xbox One' onClick={this.handleChange} checked={true} name="platform" type='checkbox' id={`inline-checkbox-${default_platforms[3]}`} value={default_platforms[3]} />
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

const mapDispatchToProps = dispatch => {
  return {
    getAdvancedRecommendations: (formData) => dispatch(getAdvancedRecommendations(formData))
  }
}

export default connect(null, mapDispatchToProps)(AdvancedRecsForm);

const default_platforms = ['PC', 'Switch', 'PS4', 'XONE']

const platforms = [{"id": 158}, {"id": 339}, {"id": 8, "abbreviation": "PS2"}, {"id": 39, "abbreviation": "iOS"}, {"id": 94, "abbreviation": "C+4"}, {"id": 144}, {"id": 88, "abbreviation": "odyssey"}, {"id": 90, "abbreviation": "cpet"}, {"id": 237}, {"id": 35, "abbreviation": "Game Gear"}, {"id": 44, "abbreviation": "zod"}, {"id": 68, "abbreviation": "colecovision"}, {"id": 123}, {"id": 129, "abbreviation": "ti-99"}, {"id": 133}, {"id": 134}, {"id": 136}, {"id": 135}, {"id": 156}, {"id": 160}, {"id": 165, "abbreviation": "PlayStation VR"}, {"id": 163, "abbreviation": "Steam VR"}, {"id": 142}, {"id": 148}, {"id": 146}, {"id": 147}, {"id": 149}, {"id": 25, "abbreviation": "ACPC"}, {"id": 51, "abbreviation": "fds"}, {"id": 62, "abbreviation": "Jaguar"}, {"id": 87, "abbreviation": "virtualboy"}, {"id": 89, "abbreviation": "microvision"}, {"id": 13, "abbreviation": "DOS"}, {"id": 23, "abbreviation": "DC"}, {"id": 36, "abbreviation": "xla"}, {"id": 45, "abbreviation": "psn"}, {"id": 65, "abbreviation": "Atari8bit"}, {"id": 70, "abbreviation": "vectrex"}, {"id": 85, "abbreviation": "donner30"}, {"id": 97, "abbreviation": "pdp-8"}, {"id": 98, "abbreviation": "gt40"}, {"id": 112, "abbreviation": "microcomputer"}, {"id": 101, "abbreviation": "nimrod"}, {"id": 115}, {"id": 119}, {"id": 124}, {"id": 127}, {"id": 125}, {"id": 128, "abbreviation": "supergrafx"}, {"id": 126}, {"id": 132}, {"id": 138}, {"id": 139}, {"id": 155}, {"id": 159}, {"id": 150}, {"id": 153}, {"id": 154}, {"id": 11, "abbreviation": "XBOX"}, {"id": 108, "abbreviation": "pdp11"}, {"id": 47, "abbreviation": "VC"}, {"id": 50, "abbreviation": "3DO"}, {"id": 53, "abbreviation": "MSX2"}, {"id": 60, "abbreviation": "Atari7800"}, {"id": 78, "abbreviation": "segacd"}, {"id": 24, "abbreviation": "GBA"}, {"id": 30, "abbreviation": "Sega32"}, {"id": 140}, {"id": 143}, {"id": 145}, {"id": 4, "abbreviation": "N64"}, {"id": 18, "abbreviation": "NES"}, {"id": 16, "abbreviation": "Amiga"}, {"id": 22, "abbreviation": "GBC"}, {"id": 41, "abbreviation": "WiiU"}, {"id": 77, "abbreviation": "x1"}, {"id": 82, "abbreviation": "browser"}, {"id": 109, "abbreviation": "cdccyber70"}, {"id": 113}, {"id": 116}, {"id": 114}, {"id": 117}, {"id": 121}, {"id": 122}, {"id": 120}, {"id": 141}, {"id": 37, "abbreviation": "3DS"}, {"id": 29, "abbreviation": "Genesis"}, {"id": 64, "abbreviation": "SMS"}, {"id": 38, "abbreviation": "PSP"}, {"id": 86, "abbreviation": "turbografx16"}, {"id": 19, "abbreviation": "SNES"}, {"id": 306}, {"id": 307}, {"id": 308}, {"id": 15, "abbreviation": "C64"}, {"id": 14, "abbreviation": "Mac"}, {"id": 20, "abbreviation": "NDS"}, {"id": 21, "abbreviation": "NGC"}, {"id": 32, "abbreviation": "Saturn"}, {"id": 34, "abbreviation": "Android"}, {"id": 42, "abbreviation": "NGage"}, {"id": 66, "abbreviation": "Atari5200"}, {"id": 67, "abbreviation": "intellivision"}, {"id": 73, "abbreviation": "blackberry"}, {"id": 93, "abbreviation": "C16"}, {"id": 111, "abbreviation": "imlac-pds1"}, {"id": 118}, {"id": 131}, {"id": 157}, {"id": 162, "abbreviation": "Oculus VR"}, {"id": 152}, {"id": 9, "abbreviation": "PS3"}, {"id": 63, "abbreviation": "Atari-ST"}, {"id": 46, "abbreviation": "Vita"}, {"id": 61, "abbreviation": "Lynx"}, {"id": 12, "abbreviation": "X360"}, {"id": 167, "abbreviation": "PS5"}, {"id": 58, "abbreviation": "SFAM"}, {"id": 92, "abbreviation": "steam"}, {"id": 91, "abbreviation": "astrocade"}, {"id": 96, "abbreviation": "pdp10"}, {"id": 55, "abbreviation": "Mobile"}, {"id": 52, "abbreviation": "Arcade"}, {"id": 56, "abbreviation": "WiiWare"}, {"id": 137}, {"id": 5, "abbreviation": "Wii"}, {"id": 7, "abbreviation": "PS1"}, {"id": 33, "abbreviation": "Game Boy"}, {"id": 69, "abbreviation": "bbcmicro"}, {"id": 71, "abbreviation": "vic-20"}, {"id": 75, "abbreviation": "Apple]["}, {"id": 74, "abbreviation": "Win Phone"}, {"id": 80, "abbreviation": "neogeoaes"}, {"id": 84, "abbreviation": "sg1000"}, {"id": 161}, {"id": 79, "abbreviation": "neogeomvs"}, {"id": 57, "abbreviation": "WonderSwan"}, {"id": 169, "abbreviation": "Series X"}, {"id": 3, "abbreviation": "Linux"}, {"id": 72, "abbreviation": "Ouya"}, {"id": 95, "abbreviation": "pdp1"}, {"id": 151}, {"id": 99, "abbreviation": "famicom"}, {"id": 100, "abbreviation": "analogueelectronics"}, {"id": 166}, {"id": 102, "abbreviation": "edsac"}, {"id": 170, "abbreviation": "Stadia"}, {"id": 104, "abbreviation": "hp2100"}, {"id": 236}, {"id": 103, "abbreviation": "pdp-7"}, {"id": 238}, {"id": 105, "abbreviation": "hp3000"}, {"id": 106, "abbreviation": "sdssigma7"}, {"id": 203}, {"id": 164}, {"id": 107, "abbreviation": "call-a-computer"}, {"id": 240}, {"id": 110, "abbreviation": "plato"}, {"id": 239}, {"id": 26, "abbreviation": "ZXS"}, {"id": 274}, {"id": 27, "abbreviation": "MSX"}, {"id": 309}, {"id": 59, "abbreviation": "Atari2600"}];

const platform_names = platforms.map(platform => { return platform.abbreviation });

const genres = [{ "id": 4, "name": "Fighting" }, { "id": 5, "name": "Shooter" }, { "id": 7, "name": "Music" }, { "id": 8, "name": "Platform" }, { "id": 9, "name": "Puzzle" }, { "id": 10, "name": "Racing" }, { "id": 11, "name": "Real Time Strategy (RTS)" }, { "id": 12, "name": "Role-playing (RPG)" }, { "id": 13, "name": "Simulator" }, { "id": 14, "name": "Sport" }, { "id": 15, "name": "Strategy" }, { "id": 16, "name": "Turn-based strategy (TBS)" }, { "id": 24, "name": "Tactical" }, { "id": 26, "name": "Quiz/Trivia" }, { "id": 25, "name": "Hack and slash/Beat 'em up" }, { "id": 30, "name": "Pinball" }, { "id": 31, "name": "Adventure" }, { "id": 33, "name": "Arcade" }, { "id": 34, "name": "Visual Novel" }, { "id": 32, "name": "Indie" }, { "id": 35, "name": "Card & Board Game" }, { "id": 36, "name": "MOBA" }, { "id": 2, "name": "Point-and-click" }];

const genre_names = genres.map(genre => { return genre.name });

const multiplayer_modes = ["campaigncoop", "dropin", "lancoop", "offlinecoop", "onlinecoop", "splitscreen", "splitscreenonline"]

const game_modes = ["Single Player", "Multiplayer", "Battle Royale", "Co-operative", "Massively Multiplayer Online (MMO)"]