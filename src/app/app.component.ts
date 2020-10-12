import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CSVProcessorService } from './csvprocessor.service';
import { CSVRecord } from './model/CSVDataModel';
import {MatTableDataSource} from '@angular/Material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fileUploadForm: FormGroup;
  public file: any
  public csvRecordsArray : any
  public records: CSVRecord[];

  listData : MatTableDataSource<CSVRecord>;
  displayedColumns : string[] = ['firstName','surName','issueCount','dateOfBirth']
  constructor(private formBuilder: FormBuilder, private  csvProcessorService: CSVProcessorService) { 
    this.fileUploadForm = this.formBuilder.group({
      uploadedFile: ['']
    });
  }


  
  
  onFileUpload($event:any) {
      let input = $event.target;
      if (this.isCSVFile(input.files[0])) {
        this.file = input.files[0];
        this.fileUploadForm.get('uploadedFile').setValue(this.file);
      } else {
        alert('Only csv files allowed!');
      }
  }

  viewFile() {
    let reader = new FileReader();  
    reader.readAsText(this.fileUploadForm.get('uploadedFile').value)
    reader.onload = () => {  
      let csvData = reader.result as string; 
      this.csvRecordsArray = csvData.split('\n');
      if(this.csvProcessorService.isCsvFileEmpty(this.csvRecordsArray)){
          alert("empty csv file not allowed")
      }else if(!this.csvProcessorService.isCsvFileFormatValid(this.csvRecordsArray)){
          alert("Uploaded CSV file header format is not acceptable, please try again.")
      }else{
          this.records = this.csvProcessorService.fetchDataFromCSVFile(this.csvRecordsArray)
          this.listData = new MatTableDataSource<CSVRecord>(this.records);
      }
    };
  }


  private isCSVFile(file: any) : boolean {  
    return file.name.endsWith(".csv");  
  } 

  applyFilter($event : any){
    this.listData.filter =  $event.target.value.trim().toLowerCase();
  }

}

