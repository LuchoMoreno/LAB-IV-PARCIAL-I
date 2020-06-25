import { Injectable } from '@angular/core';



// HTTPCLIENT
import { HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : HttpClient) { }

// https://www.breakingbadapi.com/api/characters?category=Better+Call+Saul
  public getAPICompleta(url = 'https://www.breakingbadapi.com/api/characters'){

    return this.http.get<Array<any>>(url);
  }


  public getAPICompletaBetterCallSaul(url = 'https://www.breakingbadapi.com/api/characters?category=Better+Call+Saul'){

    return this.http.get<Array<any>>(url);
  }


  

  public getAPIEpisodiosBB(url = 'https://www.breakingbadapi.com/api/episodes?series=Breaking+Bad'){

    return this.http.get<Array<any>>(url);
  }

  public getAPIEpisodiosBCS(url = 'https://www.breakingbadapi.com/api/episodes?series=Better+Call+Saul'){

    return this.http.get<Array<any>>(url);
  }


}
