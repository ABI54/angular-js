import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TestingComponent } from '../testing/testing.component';
export interface Mutdb {
  POSITION:number;
  RESIDUES:string;
  MUTATIONS:string;
  EXON_NO:number;
  CLASS:string;
  DISTRIBUTION:string;
  CODON_CHANGE:string;
  ONSET:string;
  STABILITY:string;
  ABS:number;
  DATE:string;
}
const ELEMENT_DATA: Mutdb[] = [
  {POSITION: 4, RESIDUES: 'A', MUTATIONS:'S', EXON_NO: 1,CLASS:'B',DISTRIBUTION:'NA',CODON_CHANGE:'NA',ONSET:'NA',STABILITY:'Destabilizing',ABS:1.8,DATE:'28/09/2022'},
  {POSITION: 6, RESIDUES: 'T', MUTATIONS:'H', EXON_NO: 7,CLASS:'D',DISTRIBUTION:'NA',CODON_CHANGE:'NA',ONSET:'NA',STABILITY:'Destabilizing',ABS:8.7,DATE:'04/05/2022'},
  {POSITION: 9, RESIDUES: 'I', MUTATIONS:'V', EXON_NO: 1,CLASS:'B',DISTRIBUTION:'NA',CODON_CHANGE:'NA',ONSET:'NA',STABILITY:'Destabilizing',ABS:1.8,DATE:'05/07/2022'},
  {POSITION: 4, RESIDUES: 'A', MUTATIONS:'S', EXON_NO:10,CLASS:'B',DISTRIBUTION:'NA',CODON_CHANGE:'NA',ONSET:'NA',STABILITY:'Destabilizing',ABS:3.4,DATE:'10/10/2022'},
  {POSITION: 8, RESIDUES: 'G', MUTATIONS:'S', EXON_NO: 1,CLASS:'C',DISTRIBUTION:'NA',CODON_CHANGE:'NA',ONSET:'NA',STABILITY:'Destabilizing',ABS:5.6,DATE:'06/03/2022'},
  {POSITION: 6, RESIDUES: 'A', MUTATIONS:'S', EXON_NO: 7,CLASS:'B',DISTRIBUTION:'NA',CODON_CHANGE:'NA',ONSET:'NA',STABILITY:'Destabilizing',ABS:1.8,DATE:'08/01/2022'},
  {POSITION: 4, RESIDUES: 'A', MUTATIONS:'S', EXON_NO: 1,CLASS:'C',DISTRIBUTION:'NA',CODON_CHANGE:'NA',ONSET:'NA',STABILITY:'Destabilizing',ABS:9.7,DATE:'05/06/2022'},
  {POSITION:10, RESIDUES: 'S', MUTATIONS:'V', EXON_NO: 8,CLASS:'B',DISTRIBUTION:'NA',CODON_CHANGE:'NA',ONSET:'NA',STABILITY:'Destabilizing',ABS:1.8,DATE:'27/11/2022'}
];
@Component({
  selector:'app-basiccomp',
  templateUrl:'./basiccomp.component.html',
  styleUrls:['./basiccomp.component.css'],
})

export class BasiccompComponent {
  constructor(public matDialog:MatDialog){}
  Opendialog(): void{
    this.matDialog.open(TestingComponent,{
      width:'350px',
    })}
    Plant:any
    dataSource:any=[]
    viewtable:any=false;
    displayedColumns:any=['POSITION','RESIDUES','MUTATIONS','EXON_NO','CLASS','DISTRIBUTION','CODON_CHANGE',
                          'ONSET','STABILITY','ABS','DATE'];
  somethingChanged(palnt:any)
  {
  console.log("plant",palnt)
    this.viewtable=true;
    this.dataSource=ELEMENT_DATA;
    if(this.Plant==1){
      this.displayedColumns=['POSITION','RESIDUES','MUTATIONS','EXON_NO','CLASS','DATE','actions'];
    }
    else{
      this.displayedColumns=['DISTRIBUTION','CODON_CHANGE','ONSET','STABILITY','ABS'];
    }
  } 
  }
