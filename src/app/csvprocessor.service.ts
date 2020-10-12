import { Injectable } from '@angular/core';
import { CSVRecord } from './model/CSVDataModel';

@Injectable()
export class CSVProcessorService {

  constructor() { }

  isCsvFileEmpty(csvRecords : any) : boolean{
    let isEmpty: boolean = false;
    if(csvRecords.length == 1 || csvRecords.length == 0)
      isEmpty = true; 
    return isEmpty;
  }

  isCsvFileFormatValid(csvRecords : any) : boolean{
    let isValidHeader: boolean = false;
    let validCsvFileHeader : any = ['First name','Sur name','Issue count','Date of birth'];
    let headers : any[] = csvRecords[0].split(',');
    if(headers.length == validCsvFileHeader.length){
      let missing = headers.filter(item => validCsvFileHeader.indexOf(item.substring(1,item.lastIndexOf('"'))) < 0);
      return missing.length == 0 ? isValidHeader = true : isValidHeader;
    }else{
      return isValidHeader
    }
  }

  fetchDataFromCSVFile(csvRecords: any) : CSVRecord[]{
    let csvRecordArray = [];  
    for (let i = 1; i < csvRecords.length; i++) {  
      let curruntRecord = csvRecords[i].split(',');  
        let csvRecord: CSVRecord = new CSVRecord();  
        csvRecord.firstName = curruntRecord[0].trim().substring(1,curruntRecord[0].length-1);  
        csvRecord.surName = curruntRecord[1].trim().substring(1,curruntRecord[1].length-1);  
        csvRecord.issueCount = curruntRecord[2].trim().substring(1,curruntRecord[2].length-1);  
        csvRecord.dateOfBirth = curruntRecord[3].trim().substring(1,curruntRecord[3].lastIndexOf('"'));  
        csvRecordArray.push(csvRecord);  
    }  
    return csvRecordArray;  
  }

}
