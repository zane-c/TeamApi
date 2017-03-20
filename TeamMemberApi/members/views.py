from django.http import HttpResponse, JsonResponse
from django.template import loader
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from members.models import Member
from members.serializers import MemberSerializer
from django.views.decorators.csrf import csrf_exempt, csrf_protect
from django.views import generic
from django.views.decorators.csrf import ensure_csrf_cookie

"""
    WARNING: Cross site requests not allowed. You can
    add @csrf_exempt decorator above functions below
    for testing purposes
"""

@csrf_exempt
def member_list(request):
    """
    Allows for GET requests for all members
    and POST requests to add member(s) to the
    db. Will return the http status code and 
    json data if applicable.
    """
    if request.method == 'GET':
        members = Member.objects.all()
        serializer = MemberSerializer(members, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = MemberSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def member_detail(request, pk):
    """
    Allows operations on a specific member
    id such as GET, PUT, and DELETE. Will 
    return the http status and json data
    if applicable. 
    """
    try:
        member = Member.objects.get(pk=pk)
    except Member.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = MemberSerializer(member)
        return JsonResponse(serializer.data)

    elif request.method == 'PATCH':
        data = JSONParser().parse(request)
        response = member.update(data)
        if response != None:
            return HttpResponse(status=400)
        serializer = MemberSerializer(member)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = MemberSerializer(member, data=data)
        print(data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        member.delete()
        return HttpResponse(status=204)


@ensure_csrf_cookie
def index(request):
    """Loads testing view"""
    template_name = 'members/ui.html'
    template = loader.get_template(template_name)
    return HttpResponse(template.render(request))

@ensure_csrf_cookie
def react(request):
    """Loads testing view"""
    template_name = 'members/index.html'
    template = loader.get_template(template_name)
    return HttpResponse(template.render(request))
