import request from '@/utils/request';
import {LoginParamsType} from "@/services/login";

export async function getTableData(params: LoginParamsType) {
  return request('/api/demo/table', {
    method: 'POST',
  });
}
