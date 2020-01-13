/**
 * API to dataserver
 *
 * @format
 * @flow
 */

export default class QuestionAPI {
  /**
   * Data changes with back-end server
   */

  constructor(host) {
    this.host = host;
  }

  async getQuestionsList() {
    /**
     * Return questions list
     */
    const res = await fetch(this.host, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const response = await res.json();
    return response;
  }

  async getQuestion(url) {
    /**
     * Return selected question
     */
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const response = await res.json();
    return response;
  }
}