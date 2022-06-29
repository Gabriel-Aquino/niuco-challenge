import AppError from 'src/shared/errors/app-error';
import httpStatusCodes from 'src/shared/utils/http-status-codes';
import isPayingRules from 'src/shared/utils/is-paying-rules';

export default class CheckIfIsPaying {
  isPaying(role: string): boolean {
    for (const payingRules of isPayingRules) {
      if (payingRules.role === role) {
        return payingRules.isPaying;
      }
    }
    throw new AppError('Backend returned an invalid role, please try again later', httpStatusCodes.INTERNAL_SERVER, 'conflict');
  }
}
