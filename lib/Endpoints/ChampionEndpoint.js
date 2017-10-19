import PlatformSuperclass from './PlatformSuperclass';
import Request from 'RequestClient/Request';
import METHOD_NAMES from 'Enums/method-names';

class ChampionEndpoint extends PlatformSuperclass {
  constructor(config) {
    super();

    this.config = config;

    this.get = this.get.bind(this);
    this.list = this.list.bind(this);

    this.serviceName = 'platform';
  }

  /**
   * Retrieve champion by ID.
   * 
   * Implements /lol/platform/v3/champions/{id}.
   *  
   * @param {number} championID - The ID of the champion. 
   */
  get(championID) {
    return new Request(
      this.config,
      this.serviceName,
      `champions/${championID}`,
      METHOD_NAMES.CHAMPION.GET_CHAMPION_BY_ID,
    );
  }

  /**
   * Retrieve all champions.
   * 
   * Implements /lol/platform/v3/champions.
   */
  list() {
    return new Request(
      this.config,
      this.serviceName,
      `champions`,
      METHOD_NAMES.CHAMPION.GET_CHAMPIONS,
    );
  }
}

export default ChampionEndpoint;