export interface DepositContract {
  Deposit(deposit_input: string);
}

export const DEPOSIT_CONTRACT_ABI = [{"name":"DepositEvent","inputs":[{"type":"bytes","name":"pubkey","indexed":false},{"type":"bytes","name":"withdrawal_credentials","indexed":false},{"type":"bytes","name":"amount","indexed":false},{"type":"bytes","name":"signature","indexed":false},{"type":"bytes","name":"index","indexed":false}],"anonymous":false,"type":"event"},{"outputs":[],"inputs":[{"type":"uint256","name":"minDeposit"},{"type":"address","name":"_drain_address"}],"constant":false,"payable":false,"type":"constructor"},{"name":"get_hash_tree_root","outputs":[{"type":"bytes32","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":91734},{"name":"get_deposit_count","outputs":[{"type":"bytes","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":10493},{"name":"deposit","outputs":[],"inputs":[{"type":"bytes","name":"pubkey"},{"type":"bytes","name":"withdrawal_credentials"},{"type":"bytes","name":"signature"}],"constant":false,"payable":true,"type":"function","gas":1334707},{"name":"drain","outputs":[],"inputs":[],"constant":false,"payable":false,"type":"function","gas":35823},{"name":"MIN_DEPOSIT_AMOUNT","outputs":[{"type":"uint256","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":663},{"name":"deposit_count","outputs":[{"type":"uint256","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":693},{"name":"drain_address","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":723}];
