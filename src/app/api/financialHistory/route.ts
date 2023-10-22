import { NextRequest, NextResponse } from 'next/server'
import db from '../../../../db.json'

function requestGetHandler(_request: NextRequest): NextResponse {
  return NextResponse.json(db.financialHistory)
}

async function requestPostHandler(_request: Request) {
  try {
    const formData = await _request.formData()
    const userId = formData.get('userId')
    const type = formData.get('type')
    const amount = formData.get('amount')
    const description = formData.get('description')
    const date = formData.get('date')

    if (!userId || !type || !amount || !description) {
      return Response.json(
        { message: 'Faltan propiedades obligatorias en la solicitud' },
        { status: 400 }
      )
    }

    const newEntry = {
      id: db.financialHistory.length + 1,
      userId: Number(userId),
      type: `${type}`,
      amount: Number(amount),
      description: `${description}`,
      date: `${date}`
    }

    db.financialHistory.push(newEntry)
    return Response.json(newEntry, { status: 201 })
  } catch (error) {
    console.log(error)
  }
}

export { requestGetHandler as GET, requestPostHandler as POST }
