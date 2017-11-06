var policy = {
        'policyType': '', // 保单类型 默认为空
        'policyCode': '', // 保单号
        'policyChannel': '', // 保单渠道 默认为空
        'companyCode': '', // 分公司编号 通过保单号截取第一位
        'riskCode': 'ZXSB', // 险种代码
        'holderId': '', // 投保人ID
        'insuredId': '', // 被保人ID
        'premium': '', // 期交保费
        'payYears': '' // 交费年期
};
var conApplication = {
        'communityId': '', // 投保人入住社区代码
        'tName': '', // 姓名
        'tSex': '', // 称谓
        'tBirthday': '', // 出生日期
        'tNation': '', // 民族
        'holderCertNum': '', // 身份证号码
        'tProvince': '', // 省
        'tCity': '', // 市
        'area': '', // 区
        'holderLiveAddresss': '', // 居住地址
        'holderZipCode': '', // 邮编
        'holderMobile': '', // 联系电话
        'holderEmail': '', // 邮箱
        'tIdentity': '001', // 身份属性（所属）
        'tEdu': '', // 教育背景
        'tMaritalStatus': '', // 婚姻状况
        'tChildNum': '', // 子女数量
        'mateName': '', // 姓名  配偶
        'mateSex': '', // 称谓
        'tMateBirth': '', // 出生日期
        'mateNation': '', // 民族
        'mateCertNum': '', // 身份证号码
        'mateMibile': '', // 联系电话
        'mateIndustry': '', // 所在行业
        'backName': '', // 姓名
        'backHolderRelation': '', // 与投保人关系
        'backMobile': '', // 电话
        'parentHold': '', // 父母是否考虑入住
        'mateParentHold': '', // 配偶父母是否考虑入住
        'parentCommunity': '', // 父母入住社区代码
        'mateParentCommunity': '', // 配偶父母入住社区代码
        'fName': '', // 姓名
        'fAge': '', // 年龄
        'fPhone': '', // 电话
        'fLiveCity': '', // 居住城市
        'fCertNum': '', // 证件号码
        'mName': '', // 姓名
        'mAge': '', // 年龄
        'mPhone': '', // 电话
        'mLiveCity': '', // 居住城市
        'mCertNum': '', // 证件号码
        'lfName': '', // 姓名
        'lfAge': '', // 年龄
        'lfPhone': '', // 电话
        'lfLiveCity': '', // 居住城市
        'lfCertNum': '', // 证件号码
        'lmName': '', // 姓名
        'lmAge': '', // 年龄
        'lmPhone': '', // 电话
        'lmLiveCity': '', // 居住城市
        'lmCertNum': '', // 证件号码
        'confApplyDate': '', // 确认函申请时间
        'groupChannel': 'tk', // 确认函来源
        'mateIdType': '', // 新增配偶身份类型code
        'fIdType': '', // 新增本人父亲身份类型code
        'mIdType': '', // 新增本人母亲身份类型code
        'lfIdType': '', // 新增配偶父亲身份类型code
        'lmIdType': '' // 新增配偶母亲身份类型code
};
var signature = '';
var faceImage = '';

var parentInfo = {
      f: {
            'fName': '', // 姓名
            'fAge': '', // 年龄
            'fPhone': '', // 电话
            'fLiveCity': '', // 居住城市
            'fCertNum': '', // 证件号码
            'fIdType': '' // 新增本人父亲身份类型code
      },
      m: {
            'mName': '', // 姓名
            'mAge': '', // 年龄
            'mPhone': '', // 电话
            'mLiveCity': '', // 居住城市
            'mCertNum': '', // 证件号码
            'mIdType': '' // 新增本人母亲身份类型code
          },
      lf: {
            'lfName': '', // 姓名
            'lfAge': '', // 年龄
            'lfPhone': '', // 电话
            'lfLiveCity': '', // 居住城市
            'lfCertNum': '', // 证件号码
            'lfIdType': '' // 新增配偶父亲身份类型code
      },
      lm: {
            'lmName': '', // 姓名
            'lmAge': '', // 年龄
            'lmPhone': '', // 电话
            'lmLiveCity': '', // 居住城市
            'lmCertNum': '', // 证件号码
            'lmIdType': '' // 新增配偶母亲身份类型code
      }
};
var mateInfo = {
      'mateName': '', // 姓名  配偶
      'mateSex': '', // 称谓
      'tMateBirth': '', // 出生日期
      'mateNation': '', // 民族
      'mateCertNum': '', // 身份证号码
      'mateMibile': '', // 联系电话
      'mateIndustry': '', // 所在行业
      'mateIdType': '' // 新增配偶身份类型code
  };
export {policy, conApplication, signature, faceImage, parentInfo, mateInfo};
