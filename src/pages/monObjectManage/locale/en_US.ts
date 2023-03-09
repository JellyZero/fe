const en_US = {
  title: 'Host List',
  default_filter: 'Default',
  ungrouped_targets: 'Ungrouped hosts',
  all_targets: 'All hosts',
  datasource: 'Datasource',
  search_placeholder: 'Multiple keywords are separated by spaces',
  ident_copy_success: '{{num}} records successfully copied',
  not_grouped: 'Ungrouped',
  target_up: 'Status',
  load_per_core: 'Load per core',
  mem_util: 'Memory',
  disk_util: 'Disk',
  offset: 'Offset',

  targets: 'Hosts',
  targets_placeholder: 'Please fill in the hosts, one per line',
  bind_tag: {
    title: 'Bind tag',
    placeholder: 'Tag format is key=value, separated by enter or space',
    msg1: 'Please fill in at least one tag!',
    msg2: 'Tag format is incorrect, please check!',
    render_tip1: 'Tag length should be less than or equal to 64 bits',
    render_tip2: 'Tag format should be key=value. And key starts with a letter or underscore, and is composed of letters, numbers and underscores.',
  },
  unbind_tag: {
    title: 'Unbind tag',
    placeholder: 'Please select the tag to unbind',
    msg: 'Please fill in at least one tag!',
  },
  update_busi: {
    title: 'Update business group',
    label: 'Business group',
  },
  remove_busi: {
    title: 'Remove business group',
    msg: 'Warning: Remove the business group, the business group manager will no longer have permission to operate these hosts! You may need to clear the tags and notes of this batch of hosts beforehand!',
    btn: 'Remove',
  },
  update_note: {
    title: 'Update note',
    placeholder: 'If the content is empty, the note will be cleared',
  },
  batch_delete: {
    title: 'Batch delete',
    msg: 'Warning: This operation will permanently delete the hosts from the system, very dangerous, be careful!',
    btn: 'Delete',
  },
};
export default en_US;
