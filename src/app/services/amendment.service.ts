import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AmendmentPendigSign } from '@models/amendment/amend-pending-sign.models';
import { environment } from 'src/environments/environment';
// import { map } from 'rxjs/operators';
// import { Contract } from '../models/contract/contract.models';
// import { ContractReportDto } from '../models/contract/contract-report-dto';
// import {
//   AmendmentContractPaymentConfigInterface,
//   AmendmentRequestDTO,
//   AmendmentResponseDTO,
//   createAmendmentRequestDTO,
//   PeriodictPaymentIdEnum,
// } from '../models/amendment/amendment.models';
// import { AmendPayment } from '../models/amendment/amend-payment.models';
// import { AmendmentList } from '@models/amendment/amendment-list.models';
// import { PaymentContractService } from './payment-contract.service';
// import { PaymentPeriodicityAndCurrencyCode } from '../modules/client/pages/contract-amendments/components/payment-details/payment-details-amendments.models';
// import { Observable } from 'rxjs';
// import {
//   MonthlyPaymentType,
//   PeriodicPayment,
//   PeriodicPaymentNameEnum,
//   WeeklyPaymentType,
// } from '@models/periodicPayment.models';
// import { PeriodicPaymentEnum } from '@enumerations/periodic-payment.enum';
// import {
//   AmendmentSignatureFormDataInterface,
//   AmendmentUploadOwnTemplateInterface,
//   CreateFormDataInterface,
//   ResultListInterface,
//   FirsTraditionalPaymentCalculationInterface,
//   ResultsFromContractInterface,
// } from './models/amendment.service.models';
// import { Currency } from '@models/currency.models';
@Injectable({
  providedIn: 'root',
})
export class AmendmentService {
  // public currentContract: Contract;
  // public selectedReportDto: ContractReportDto;

  constructor(
    private http: HttpClient // private paymentContractService: PaymentContractService,
  ) {}

  // setContract(contract: Contract, selectReport: ContractReportDto) {
  //   this.currentContract = contract;
  //   this.selectedReportDto = selectReport;
  // }

  // createAmendment(
  //   amendment: createAmendmentRequestDTO,
  // ): Observable<AmendmentResponseDTO> {
  //   return this.http.post<AmendmentResponseDTO>(
  //     environment.URL_TOP_API +
  //       environment.host.ms_gateway.methods.createAmendment,
  //     amendment,
  //   );
  // }

  // updateAmendment(
  //   amendment: AmendmentRequestDTO,
  // ): Observable<AmendmentResponseDTO> {
  //   return this.http.post<AmendmentResponseDTO>(
  //     environment.URL_TOP_API +
  //       environment.host.ms_gateway.methods.amendmentConfiguration,
  //     amendment,
  //   );
  // }

  // getAmendmentsByContractId(contractId: number) {
  //   return this.http.get<AmendmentList[]>(
  //     environment.URL_TOP_API +
  //       environment.host.ms_gateway.methods.amendmentsOfContract +
  //       contractId,
  //   );
  // }

  // getAmendmentConfiguration(amendId: number) {
  //   return this.http.get(
  //     environment.URL_TOP_API + 'amd/' + amendId + '/configuration',
  //   );
  // }

  // getAmendmentPreviewPdf(amendId: number) {
  //   return this.http
  //     .get(
  //       environment.URL_TOP_API +
  //         environment.host.ms_gateway.methods.amendmentPreviewPdf +
  //         amendId,
  //       {
  //         responseType: 'blob',
  //       },
  //     )
  //     .pipe(
  //       map((result: any) => {
  //         return result;
  //       }),
  //     );
  // }
  // saveClientSign(request: AmendmentSignatureFormDataInterface) {
  //   let formDataCreator: CreateFormDataInterface[] = [];
  //   for (const key in request) {
  //     formDataCreator.push({
  //       key: key,
  //       value: request[key],
  //     });
  //   }
  //   const formData: FormData = this.createFormData(formDataCreator);
  //   return this.http.put(
  //     environment.URL_TOP_API +
  //       environment.host.ms_gateway.methods.amendmentClientSign,
  //     formData,
  //   );
  // }
  // uploadOwnTemplate(request: AmendmentUploadOwnTemplateInterface) {
  //   let formDataCreator: CreateFormDataInterface[] = [];
  //   for (const key in request) {
  //     formDataCreator.push({
  //       key: key,
  //       value: request[key],
  //     });
  //   }
  //   const formData: FormData = this.createFormData(formDataCreator);
  //   return this.http.post(
  //     environment.URL_TOP_API +
  //       environment.host.ms_gateway.methods.amendmentUploadOwnTemplate,
  //     formData,
  //   );
  // }

  // saveContractorSign(request: AmendmentSignatureFormDataInterface) {
  //   let formDataCreator: CreateFormDataInterface[] = [];
  //   for (const key in request) {
  //     formDataCreator.push({
  //       key: key,
  //       value: request[key],
  //     });
  //   }
  //   const formData: FormData = this.createFormData(formDataCreator);
  //   return this.http.put(
  //     environment.URL_TOP_API +
  //       environment.host.ms_gateway.methods.amendmentContractorSign,
  //     formData,
  //   );
  // }

  // public createFormData(values: CreateFormDataInterface[]): FormData {
  //   const formData: FormData = new FormData();
  //   values.forEach((val) => {
  //     formData.append(val.key, val.value);
  //   });
  //   return formData;
  // }

  getNotAmendmentPendingSign(TypeUser: string) {
    return this.http.get<AmendmentPendigSign>(
      environment.URL_TOP_API +
        'amd/' +
        TypeUser.toLocaleLowerCase() +
        '/pendingSign'
    );
  }

  // public getPaymentAmountFromContract(
  //   paymentInfo: ContractReportDto['payment'],
  // ): string {
  //   return paymentInfo?.split(' ')[0].replace(/[^\d.-]/g, '');
  // }

  // public getNextDayOfWeek(dayOfWeek: number, startingDate: Date) {
  //   const resultDate = new Date(startingDate.getTime());

  //   resultDate.setDate(
  //     startingDate.getDate() + ((7 + dayOfWeek - startingDate.getDay()) % 7),
  //   );

  //   if (resultDate <= startingDate) {
  //     resultDate.setDate(resultDate.getDate() + 7);
  //   }
  //   return resultDate;
  // }

  // public getPaymentPeriodicityAndCurrencyCodeFromContract(
  //   paymentInfo: ContractReportDto['payment'],
  // ): PaymentPeriodicityAndCurrencyCode {
  //   const splittedPaymentInfo = paymentInfo?.split(' ');
  //   if (splittedPaymentInfo.includes('Twice')) {
  //     return {
  //       currencyCode: splittedPaymentInfo[1],
  //       paymentPeriodicity: PeriodicPaymentNameEnum.TWICE_PER_MONTH,
  //     };
  //   } else {
  //     const paymentPeriodicity =
  //       splittedPaymentInfo[splittedPaymentInfo.length - 1];
  //     return {
  //       currencyCode: splittedPaymentInfo[1],
  //       paymentPeriodicity: paymentPeriodicity,
  //     };
  //   }
  // }

  // public getPaydayForWeeklyPaymentPeriodicity(
  //   periodicityTag: ContractReportDto['periodicityTag'],
  // ): WeeklyPaymentType {
  //   return this.paymentContractService.weekDays.find(
  //     (weekday) => weekday.name === periodicityTag,
  //   );
  // }

  // public getPaydayForMonthlyPaymentPeriodicity(
  //   payDay: string,
  // ): MonthlyPaymentType {
  //   if (
  //     payDay.toLocaleLowerCase() === 'last day' ||
  //     payDay.toLocaleLowerCase() === 'last weekday' ||
  //     payDay.toLocaleLowerCase() === 'last friday'
  //   ) {
  //     return this.paymentContractService.monthlyDays.find((month) =>
  //       month.description.toLocaleLowerCase().includes(payDay),
  //     );
  //   } else {
  //     const _payDay = Number.parseInt(payDay.replace(/\D/g, ''));
  //     return this.paymentContractService.monthlyDays.find(
  //       (month) => month.value === _payDay,
  //     );
  //   }
  // }

  // public getPaydayForMonthlyPaymentPeriodicityByValue(
  //   value: number,
  // ): MonthlyPaymentType {
  //   return this.paymentContractService.monthlyDays.find(
  //     (month) => month.value === value,
  //   );
  // }

  // public calculateFirstTraditionalPayment(
  //   startContractDate: Date,
  //   selectedPaymentDate: Date,
  //   paymentAmount: string,
  //   paymentPeriodicity: PeriodicPayment,
  // ): FirsTraditionalPaymentCalculationInterface {
  //   const daysFactor =
  //     paymentPeriodicity.name === PeriodicPaymentEnum.periodict.MONTHLY.name
  //       ? PeriodicPaymentEnum.periodict.MONTHLY.days
  //       : paymentPeriodicity.name === PeriodicPaymentEnum.periodict.TWICE.name
  //       ? PeriodicPaymentEnum.periodict.TWICE.days
  //       : PeriodicPaymentEnum.periodict.WEEKLY.days;
  //   const paymentPerDay = Number.parseFloat(paymentAmount) / daysFactor;
  //   let daysBetweenDates =
  //     (selectedPaymentDate.getTime() - startContractDate.getTime()) /
  //       (1000 * 60 * 60 * 24) +
  //     1;
  //   daysBetweenDates = daysBetweenDates === 31 ? 30 : daysBetweenDates;
  //   daysBetweenDates =
  //     daysBetweenDates === 8 &&
  //     paymentPeriodicity.name === PeriodicPaymentEnum.periodict.WEEKLY.name
  //       ? 7
  //       : daysBetweenDates;

  //   const firstPayment = Math.floor(paymentPerDay * daysBetweenDates);
  //   const daysOfWork = Math.floor(daysBetweenDates);
  //   return { paymentAmount: firstPayment, daysOfWork: daysOfWork };
  // }

  // public getResults(
  //   milestonesText: ContractReportDto['mailstoneDescription'],
  //   currencyList: Currency[],
  // ): ResultListInterface[] {
  //   const resultsArray: ResultListInterface[] = [];
  //   const spllitedResultsString: string[] = milestonesText.split(', ');
  //   spllitedResultsString.pop();
  //   spllitedResultsString.forEach((result) => {
  //     const [firstPosition, secondPosition, thirdPosition, ...restPosition] =
  //       result.split(/[()]/);
  //     const currencyCode = secondPosition.replace(/[^a-zA-Z]+/g, '');
  //     const currency = currencyList.find(
  //       (currency) => currency.code === currencyCode,
  //     );
  //     resultsArray.push({
  //       currency: currencyCode,
  //       name: thirdPosition.trim(),
  //       value: secondPosition.replace(/[^\d.-]/g, ''),
  //       currencyDTO: currency,
  //       markedForDeletion: false,
  //     });
  //   });

  //   return resultsArray;
  // }

  // public createResultString(resultObject: ResultListInterface): string {
  //   return `(${resultObject.currencyDTO.symbol}${resultObject.value}) ${resultObject.value}, `;
  // }

  // public getPaymentConfigFromResult(
  //   result: ResultListInterface,
  // ): AmendmentContractPaymentConfigInterface {
  //   const paymentConfig: AmendmentContractPaymentConfigInterface = {
  //     currencyId: result.currencyDTO.id,
  //     deleteFlag: result.markedForDeletion,
  //     milestoneName: result.name,
  //     milestoneDescription: result.description,
  //     paymentValue: Number.parseInt(result.value),
  //     periodicPaymentId: PeriodictPaymentIdEnum.MILESTONE,
  //   };

  //   return paymentConfig;
  // }
}
