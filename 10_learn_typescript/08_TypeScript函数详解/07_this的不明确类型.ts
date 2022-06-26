type ThisType = { name: string }

function eating(this: ThisType, message: string) {
  console.log('🚀【this不明确】',this.name+' eating',message);
}

const info = {
  name: 'why',
  eating:eating
}

// 隐式绑定 谁调用，this 指向谁
info.eating('hahahah')

// 显式绑定
eating.call({name:'kobe'},'呵呵呵')
eating.apply({ name: 'jame' }, ['嘿嘿嘿'])





export{}